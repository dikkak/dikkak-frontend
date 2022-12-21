import React from "react";
import styled from "styled-components";
import "moment/locale/ko";
import * as moment from "moment";
import { ChatContent } from "../Chat";
import FileOtherMessage from "./FileOtherMessage";

moment.locale("ko");

interface IChatMessage {
  message: ChatContent;
}

const ChatOtherMessage = ({ message }: IChatMessage) => {
  if (message.data.fileUrl) return <FileOtherMessage message={message} />;
  return (
    <Container>
      <OtherMessage>{message.data.content}</OtherMessage>
      <CreatedTime>
        {moment.default(message.data.createdAt).format("HH:mm")}
      </CreatedTime>
    </Container>
  );
};

export default ChatOtherMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const OtherMessage = styled.p`
  position: relative;
  min-height: 15px;
  min-width: 30px;
  max-width: 680px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 1px solid ${(props) => props.theme.subColor};
  border-radius: 10px;
  font-size: 15px;
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 10px 10px;
  white-space: pre-wrap;
  word-break: break-all;
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 9px 8px 0;
    border-color: transparent ${(props) => props.theme.subColor};
    display: block;
    width: 0;
    z-index: 0;
    left: -10px;
    top: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 9px 8px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    left: -8px;
    top: 9px;
  }
`;
const CreatedTime = styled.p`
  margin-left: 5px;
  font-size: 15px;
  color: #717171;
`;
