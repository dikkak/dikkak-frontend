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
  step: string;
  proposalId: number;
}

export interface ChatResonse {
  type: string;
  coworkingId: number;
  data: ChatData;
}
interface ChatData {
  email: string;
  content?: string;
  fileName?: string;
  fileUrl?: string;
  createdAt: Date;
}

const Chat = ({ coworkingId, data, step, proposalId }: IChatProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [chatList, setChatList] = useState<ChatResonse[]>([]);
  const [chatText, setChatText] = useState("");
  const [chatListLoading, setChatListLoading] = useState<boolean>(false);
  const client = useRef<Stomp.Client>();
  const subscribe = useCallback(() => {
    client.current?.subscribe(`/dikkak/coworking/${coworkingId}`, (body) => {
      const json_body = JSON.parse(body.body);
      setChatList((_chat_list: ChatResonse[]) => [..._chat_list, json_body]);
    });
  }, [coworkingId]);
  const connect = useCallback(() => {
    client.current = new Stomp.Client({
      brokerURL: "wss://dev.dikkak.com/chat/dikkak-chat",
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
      .get<ChatResonse[]>(
        `/coworking/chat?coworkingId=${coworkingId}&step=${step}`
      )
      .then((res) => {
        if (!res.data) return;
        setChatList(res.data);
        setChatListLoading(false);
      });
    return () => disconnect();
  }, [connect, coworkingId, step]);
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
            <S.FileButton />
          </S.AdditionalButtons>
        </S.InputArea>
        <S.SubmitArea>
          <S.SubmitButton onClick={() => publish(chatText)}>
            전송하기
          </S.SubmitButton>
        </S.SubmitArea>
      </S.TextContainer>
    </S.Container>
  );
};

export default Chat;
