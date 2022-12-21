import React, { useState } from "react";
import styled from "styled-components";
import "moment/locale/ko";
import * as moment from "moment";
import { ChatContent } from "../Chat";
import FileImg from "../../../assets/workspaceImage/fileImg.svg";
import ImageOverlay from "../../ImageOverlay";
import { onDownload } from "../../../utils/onDownload";

moment.locale("ko");

interface IFileOtherMessage {
  message: ChatContent;
}
const FileOtherMessage = ({ message }: IFileOtherMessage) => {
  // 레퍼런스 이미지 파일의 미리보기의 클릭 상태
  const [isRefClicked, setIsRefClicked] = useState(false);
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
          <FileName
            onClick={() => {
              onDownload(
                message.data.fileUrl!.split(
                  "https://dikkak.s3.ap-northeast-2.amazonaws.com/"
                )[1],
                message.data.fileName!,
                true
              );
            }}
          >
            {message.data.fileName}
          </FileName>
        </OtherMessage>
        <CreatedTime>
          {moment.default(message.data.createdAt).format("HH:mm")}
        </CreatedTime>
      </Container>
      {message.data.fileUrl && message.data.isImageFile && (
        <FileImage
          fileUrl={message.data.fileUrl}
          onClick={() => setIsRefClicked(true)}
        />
      )}
      {isRefClicked && (
        <ImageOverlay
          imageName={message.data.fileName!}
          imageUrl={message.data.fileUrl!}
          setIsRefClicked={setIsRefClicked}
          chat={true}
        />
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
const FileName = styled.p`
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
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
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
