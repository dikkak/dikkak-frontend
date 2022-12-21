import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { userInfo } from "../../../apis/auth_login";
import { ChatResonse } from "../Chat";
import ChatMessage from "../ChatMessage";
import ChatOtherMessage from "../ChatOtherMessage";
import "moment/locale/ko";
import * as moment from "moment";
import { Navigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
moment.locale("ko");

interface IChatContainer {
  chatList: ChatResonse[];
  chatRef: React.RefObject<HTMLDivElement>;
  proposalId: number;
}
const ChatContainer = ({ chatList, chatRef, proposalId }: IChatContainer) => {
  const DOMAIN_URL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_DOMAIN_URL
      : process.env.REACT_APP_DEV_DOMAIN_URL;
  const { data, isFetching, isLoading } = useQuery("user-info", userInfo);
  if (!isFetching && !data) {
    return <Navigate to="/login" />;
  }
  if (isLoading)
    return (
      <LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </LoadingContainer>
    );
  return (
    <Container ref={chatRef}>
      {chatList.length !== 0 && (
        <DateIndicator style={{ alignSelf: "center" }}>
          {moment
            .default(chatList[0].data.createdAt)
            .format("YYYY년 MM월 DD일")}
        </DateIndicator>
      )}
      <ChatAlert>
        <button
          onClick={() =>
            window.open(`${DOMAIN_URL}/proposal/${proposalId}`, "_blank")
          }
        >
          외주제안서 확인하기
        </button>
        <AlertMessage>
          <p>
            첨부된 파일 및 링크는 상단우측의 파일챕터에서 확인할 수 있습니다.
          </p>
        </AlertMessage>
      </ChatAlert>
      {chatList.map((message, index) => {
        return message.data.email === data?.email ? (
          index !== 0 &&
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
        ) : index !== 0 &&
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
            <div style={{ alignSelf: "flex-start", marginLeft: "13px" }}>
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

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

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
  margin: 20px 0;
  border-radius: 10px;
  text-align: center;
  line-height: 25px;
  color: white;
  font-size: 15px;
`;
const ChatAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  & > button {
    margin-bottom: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.mainColor};
    font-size: 16px;
    font-weight: 900;
    text-decoration-line: underline;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const AlertMessage = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  &::after {
    flex: 1;
    content: "";
    border-top: 2px dashed ${(props) => props.theme.mainColor};
  }
  &::before {
    flex: 1;
    content: "";
    border-top: 2px dashed ${(props) => props.theme.mainColor};
  }
  & > p {
    color: ${(props) => props.theme.mainColor};
    font-weight: 400;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
