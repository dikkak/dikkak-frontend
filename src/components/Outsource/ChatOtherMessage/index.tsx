import React from "react";
import styled from "styled-components";
import "moment/locale/ko";
import * as moment from "moment";
import { ChatResonse } from "../Chat";

moment.locale("ko");

interface IChatMessage {
  message: ChatResonse;
}

const ChatOtherMessage = ({ message }: IChatMessage) => {
  return (
    <Container>
      <OtherMessage>{message.data.content}</OtherMessage>
      <CreatedTime>
        {moment.default(message.data.createAt).format("HH:mm")}
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
  min-width: 50px;
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
  padding: 10px 20px;
  white-space: pre-wrap;
  word-break: break-all;
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 13px 8px 0;
    border-color: transparent ${(props) => props.theme.subColor};
    display: block;
    width: 0;
    z-index: 0;
    left: -14px;
    top: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 13px 8px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    left: -12px;
    top: 9px;
  }
`;
const CreatedTime = styled.p`
  margin-left: 5px;
  font-size: 15px;
  color: #717171;
`;
