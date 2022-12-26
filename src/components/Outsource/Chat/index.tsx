import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Stomp from "@stomp/stompjs";
import * as S from "./styles";
import ChatContainer from "../ChatContainer";
import NextButton from "../NextButton";
import { IUserInfo } from "../../../apis/auth_login";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

interface IChatProps {
  coworkingId: string;
  data: IUserInfo;
  proposalId: number;
}

export interface ChatResonse {
  content: ChatContent[];
  hasNext: boolean;
  hasPrev: boolean;
  next: number;
  prev: number;
}
export interface ChatContent {
  type: string;
  coworkingId: number;
  data: ChatData;
}
interface ChatData {
  email: string;
  content?: string;
  fileName?: string;
  fileUrl?: string;
  isImageFile?: boolean;
  createdAt: Date;
}

const Chat = ({ coworkingId, data, proposalId }: IChatProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chatList, setChatList] = useState<ChatContent[]>([]);
  const [chatText, setChatText] = useState("");
  const [chatListLoading, setChatListLoading] = useState<boolean>(false);
  const client = useRef<Stomp.Client>();
  const fileRef = useRef<HTMLInputElement>(null);
  const subscribe = useCallback(() => {
    client.current?.subscribe(`/sub/coworking/${coworkingId}`, (body) => {
      const json_body = JSON.parse(body.body);
      setChatList((_chat_list: ChatContent[]) => [..._chat_list, json_body]);
    });
  }, [coworkingId]);
  const connect = useCallback(() => {
    client.current = new Stomp.Client({
      brokerURL: "wss://dev.dikkak.com/api/dikkak-chat",
      connectHeaders: {
        Authorization: localStorage.getItem("token") || "",
      },
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  }, [subscribe]);
  const disconnect = () => {
    client.current?.deactivate();
  };
  const publish = (chat: string) => {
    if (!client.current?.connected) return;
    if (chat.trim() === "") return;
    client.current?.publish({
      destination: "/pub/text",
      body: JSON.stringify({
        email: data.email,
        content: chat,
        coworkingId,
      }),
    });

    setChatText("");
  };

  const onLoadFile = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    const files = e?.target.files!;
    let formData = new FormData();
    if (files[0]) {
      if (!client.current?.connected) return;
      formData.append(
        "request",
        new Blob(
          [
            JSON.stringify({
              email: data.email,
              coworkingId,
            }),
          ],
          { type: "application/json" }
        )
      );
      formData.append("file", files[0]);
      axios({
        method: "post",
        url: "/pub/file",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      return;
    }
  };
  const onTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.currentTarget.value.trim() !== "" &&
      e.key === "Enter" &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      publish(chatText);
    }
  };

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [chatList]);
  useEffect(() => {
    setChatListLoading(true);
    connect();
    axios
      .get<ChatResonse>(`/coworking/chat?coworkingId=${coworkingId}`)
      .then((res) => {
        if (!res.data) return;
        setChatList(res.data.content);
        setChatListLoading(false);
      });
    return () => disconnect();
  }, [connect, coworkingId]);
  if (chatListLoading || !data)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  return (
    <S.Container>
      <S.ChatBox>
        <S.Title>
          <S.Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          작업내용 확인
        </S.Title>
        <ChatContainer
          chatList={chatList}
          chatRef={chatContainerRef}
          proposalId={proposalId}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NextButton />
        </div>
      </S.ChatBox>
      <S.TextContainer>
        <S.InputArea>
          <S.Text onChange={onTyping} onKeyDown={onKeyDown} value={chatText} />
          <S.AdditionalButtons>
            <S.EmojiButton />
            <S.FileButton onClick={() => fileRef.current?.click()} />
          </S.AdditionalButtons>
        </S.InputArea>
        <S.SubmitArea>
          <S.SubmitButton onClick={() => publish(chatText)}>
            전송하기
          </S.SubmitButton>
        </S.SubmitArea>
      </S.TextContainer>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onLoadFile}
      />
    </S.Container>
  );
};

export default Chat;
