import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Stomp from "@stomp/stompjs";
import * as S from "./styles";
import ChatContainer from "../ChatContainer";
import NextButton from "../NextButton";

export interface ChatResonse {
  type: string;
  coworkingId: number;
  data: ChatData;
}
interface ChatData {
  email: string;
  content: string;
  createAt: Date;
}

const Chat = () => {
  const [chatList, setChatList] = useState<ChatResonse[]>([]);
  const [chatText, setChatText] = useState("");
  const client = useRef<Stomp.Client>();
  const connect = useCallback(() => {
    client.current = new Stomp.Client({
      brokerURL: "ws://localhost:8080/chat/dikkak-chat",
      onConnect: () => {
        subscribe();
      },
    });
    client.current.activate();
  }, []);
  const disconnect = () => {
    client.current?.deactivate();
  };
  const subscribe = () => {
    client.current?.subscribe("/dikkak/coworking/1", (body) => {
      const json_body = JSON.parse(body.body);
      setChatList((_chat_list: ChatResonse[]) => [..._chat_list, json_body]);
    });
  };
  const publish = (chat: string) => {
    if (!client.current?.connected) return;
    if (chat === "") return;
    client.current?.publish({
      destination: "/pub/text",
      body: JSON.stringify({
        email: "test@gmail.com",
        content: chat,
        coworkingId: 1,
      }),
    });

    setChatText("");
  };

  const onTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatText(e.currentTarget.value);
  };
  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect]);
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
        <ChatContainer chatList={chatList} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NextButton />
        </div>
      </S.ChatBox>
      <S.TextContainer>
        <S.InputArea>
          <S.Text onChange={onTyping} value={chatText} />
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
