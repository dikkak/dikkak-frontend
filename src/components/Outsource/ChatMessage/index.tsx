import React from "react";
import styled from "styled-components";
import "moment/locale/ko";
import * as moment from "moment";
import { ChatResonse } from "../Chat";

moment.locale("ko");

interface IChatMessage {
  message: ChatResonse;
}

const ChatMessage = ({ message }: IChatMessage) => {
  return (
    <Container>
      <CreatedTime>
        {moment.default(message.data.createAt).format("HH:mm")}
      </CreatedTime>
      <ClientMessage>{message.data.content}</ClientMessage>
    </Container>
  );
};

export default ChatMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ClientMessage = styled.p`
  position: relative;
  min-height: 15px;
  min-width: 50px;
  max-width: 680px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  font-size: 15px;
  margin: 0 auto;
  margin-bottom: 5px;
  padding: 10px 20px;
  white-space: pre-wrap;
  word-break: break-all;
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent ${(props) => props.theme.mainColor};
    display: block;
    width: 0;
    z-index: 0;
    right: -14px;
    top: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    right: -12px;
    top: 9px;
  }
`;
const CreatedTime = styled.p`
  margin-right: 5px;
  font-size: 15px;
  color: #717171;
`;
