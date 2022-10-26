import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { userInfo } from "../../../apis/auth_login";
import { ChatResonse } from "../Chat";
import ChatMessage from "../ChatMessage";
import ChatOtherMessage from "../ChatOtherMessage";
import "moment/locale/ko";
import * as moment from "moment";
moment.locale("ko");

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
          index === 0 ||
          Number(
            moment.default(chatList[index - 1].data.createdAt).format("YYMMDD")
          ) !==
            Number(
              moment.default(chatList[index].data.createdAt).format("YYMMDD")
            ) ? (
            <div
              style={{ display: "flex", flexDirection: "column" }}
              key={index}
            >
              <DateIndicator style={{ alignSelf: "center" }}>
                {moment
                  .default(message.data.createdAt)
                  .format("YYYY년 MM월 DD일")}
              </DateIndicator>
              <div style={{ alignSelf: "flex-end", marginRight: "13px" }}>
                <ChatMessage message={message} />
              </div>
            </div>
          ) : (
            <div
              key={index}
              style={{ alignSelf: "flex-end", marginRight: "13px" }}
            >
              <ChatMessage message={message} />
            </div>
          )
        ) : index === 0 ||
          Number(
            moment.default(chatList[index - 1].data.createdAt).format("YYMMDD")
          ) !==
            Number(
              moment.default(chatList[index].data.createdAt).format("YYMMDD")
            ) ? (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <DateIndicator style={{ alignSelf: "center" }}>
              {moment
                .default(message.data.createdAt)
                .format("YYYY월 MM월 DD월")}
            </DateIndicator>
            <div style={{ alignSelf: "flex-end", marginRight: "13px" }}>
              <ChatOtherMessage message={message} />
            </div>
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

const DateIndicator = styled.div`
  width: 336px;
  height: 25px;
  background-color: #717171;
  border-radius: 10px;
  text-align: center;
  line-height: 25px;
  color: white;
  font-size: 15px;
`;
