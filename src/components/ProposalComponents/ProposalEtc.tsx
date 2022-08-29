import React from "react";
import styled from "styled-components";
import { IEtcFile } from "../../apis/proposal";
import linkImg from "../../assets/workspaceImage/linkImage.png";
import { onDownload } from "../../utils/onDownload";
import {
  Circle,
  ClientMessage,
  Line,
  SystemMessage,
  WorkTitle,
} from "./styles";

interface IProposalEtcProps {
  etcFile: IEtcFile[] | undefined;
  etcRef: React.RefObject<HTMLHeadingElement>;
}
const ProposalEtc = ({ etcFile, etcRef }: IProposalEtcProps) => {
  return (
    <>
      <WorkTitle ref={etcRef} id="etc">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        기타 파일 업로드 (선택)
      </WorkTitle>
      <SystemMessage width="315px">
        디자인 작업에 참고할 레퍼런스를 등록해주세요
      </SystemMessage>
      {etcFile?.map((item, index) => (
        <ClientMessage key={index} style={{ marginBottom: "10px" }}>
          <InnerContainer>
            <InputBoxLabel>
              <FileImgContainer>
                <FileUploadImg></FileUploadImg>
              </FileImgContainer>
              <Text onClick={() => onDownload(item.url, item.fileName)}>
                {item.fileName}
              </Text>
            </InputBoxLabel>
          </InnerContainer>
        </ClientMessage>
      ))}
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalEtc;

const InnerContainer = styled.div`
  width: 100%;
`;
const InputBoxLabel = styled.label`
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
`;
const FileImgContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FileUploadImg = styled.img.attrs({ src: linkImg })`
  width: 20px;
  height: 20px;
`;
const Text = styled.p`
  margin-left: 15px;
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
`;
