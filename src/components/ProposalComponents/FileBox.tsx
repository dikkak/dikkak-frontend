import React, { useState } from "react";
import styled from "styled-components";
import { IEtcFile, IReferenceFile } from "../../apis/proposal";
import { BlurBackground, BlurPin, SideTitle } from "./styles";

interface IFileBoxProps {
  referenceFile: IReferenceFile[] | undefined;
  etcFile: IEtcFile[] | undefined;
}

const FileBox = ({ referenceFile, etcFile }: IFileBoxProps) => {
  const [fileClickState, setFileClickState] = useState(true);
  const [etcClickState, setEtcClickState] = useState(true);
  return (
    <BlurBackground>
      <BlurPin />
      <BlurPin />
      <BlurPin />
      <BlurPin />
      <SideTitle>FILE</SideTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "10px",
          height: "75%",
        }}
      >
        <FileContainer>
          <h3
            onClick={() => {
              setFileClickState((prev) => !prev);
            }}
          >
            레퍼런스
            <br />
            등록
          </h3>
          {fileClickState &&
            referenceFile?.map((item, index) => {
              return item.fileName !== undefined ? (
                <li key={index}>
                  <FileName>{item.fileName}</FileName>
                </li>
              ) : null;
            })}
        </FileContainer>
        <EtcFileContainer>
          <h3
            onClick={() => {
              setEtcClickState((prev) => !prev);
            }}
          >
            기타 파일
            <br />
            업로드(선택)
          </h3>
          {etcClickState &&
            etcFile?.map((item, index) => {
              return item.fileName !== undefined ? (
                <li key={index}>
                  <FileName>{item.fileName}</FileName>
                </li>
              ) : null;
            })}
        </EtcFileContainer>
      </div>
    </BlurBackground>
  );
};

export default FileBox;

const FileContainer = styled.ul`
  width: 90px;
  & h3 {
    color: ${(props) => props.theme.subColor};
    font-size: 14px;
    line-height: 1.08rem;
    padding: 0 0 0 20px;
    position: relative;
    font-family: "Inter";
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${(props) => props.theme.mainColor};
      border: 3px solid ${(props) => props.theme.mainColor};
      border-radius: 999px;
      left: -7.5px;
      top: 6px;
    }
  }
  & li {
    border-left: 1px solid #c4c4c4;
    color: #c4c4c4;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 12.5px;
    padding: 22px 0 0 18px;
    position: relative;
    top: -12px;
    max-width: 83px;
    max-height: 42px;

    &::before {
      content: "";
      position: absolute;
      width: 6.5px;
      height: 6.5px;
      background: #329a29;
      border-radius: 999px;
      left: -3.5px;
      top: 82.5%;
    }
  }
`;

const EtcFileContainer = styled(FileContainer)`
  margin-top: 18px;
`;

const FileName = styled.p`
  position: relative;
  bottom: -5px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  width: 70px;
  height: 20px;
`;
