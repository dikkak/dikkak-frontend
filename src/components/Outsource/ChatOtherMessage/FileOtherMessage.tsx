import React from "react";
import styled from "styled-components";
import "moment/locale/ko";
import * as moment from "moment";
import { ChatResonse } from "../Chat";
import FileImg from "../../../assets/workspaceImage/fileImg.svg";

moment.locale("ko");

interface IFileOtherMessage {
  message: ChatResonse;
}
const FileOtherMessage = ({ message }: IFileOtherMessage) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Container>
        <OtherMessage>
          {!message.data.isImageFile && <img src={FileImg} alt="fileImg" />}
          <p style={{ marginLeft: "5px" }}>{message.data.fileName}</p>
        </OtherMessage>
        <CreatedTime>
          {moment.default(message.data.createdAt).format("HH:mm")}
        </CreatedTime>
      </Container>
      {message.data.fileUrl && message.data.isImageFile && (
        <FileImage fileUrl={message.data.fileUrl} />
      )}
    </div>
  );
};

export default FileOtherMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const OtherMessage = styled.div`
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
const FileImage = styled.div<{ fileUrl: string }>`
  align-self: flex-start;
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  border-radius: 5px;
  background-image: url(${(props) => props.fileUrl});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;
