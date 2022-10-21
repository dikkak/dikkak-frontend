import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { userInfo } from "../../../apis/auth_login";
import { ChatResonse } from "../Chat";
import ChatMessage from "../ChatMessage";
import ChatOtherMessage from "../ChatOtherMessage";

interface IChatContainer {
  chatList: ChatResonse[];
  chatRef: React.RefObject<HTMLDivElement>;
}

const ChatContainer = ({ chatList, chatRef }: IChatContainer) => {
  const { data } = useQuery("user-info", userInfo);
  return (
    <Container ref={chatRef}>
      {chatList.map((message, index) => {
        return message.data.email === data?.email ? (
          <div
            key={index}
            style={{ alignSelf: "flex-end", marginRight: "13px" }}
          >
            <ChatMessage message={message} />
          </div>
        ) : (
          <div
            key={index}
            style={{ alignSelf: "flex-start", marginLeft: "13px" }}
          >
            <ChatOtherMessage message={message} />
          </div>
        );
      })}
    </Container>
  );
};

export default ChatContainer;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 90%;
  margin: 0 auto;
  overflow-y: scroll;
`;
