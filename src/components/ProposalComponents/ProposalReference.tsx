import React from "react";
import styled from "styled-components";
import { IReferenceFile } from "../../apis/proposal";
import {
  Circle,
  EarhImg,
  EarthImgBox,
  EarthImgContainer,
  Line,
  RefLink,
  SystemMessage,
  WorkTitle,
} from "./styles";

interface IProposalReferenceProps {
  referenceFile: IReferenceFile[] | undefined;
  referenceRef: React.RefObject<HTMLHeadingElement>;
  setIsRefClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setClickedImage: React.Dispatch<
    React.SetStateAction<{
      url: string;
      fileName: string;
      index: number;
    }>
  >;
}

const ProposalReference = ({
  referenceFile,
  referenceRef,
  setIsRefClicked,
  setClickedImage,
}: IProposalReferenceProps) => {
  const onImageClick = (url: string, fileName: string, index: number) => {
    setIsRefClicked(true);
    setClickedImage((prev) => {
      return {
        ...prev,
        url,
        fileName,
        index,
      };
    });
  };
  return (
    <>
      <WorkTitle ref={referenceRef} id="reference">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        레퍼런스 등록
      </WorkTitle>
      <SystemMessage width="393px">
        디자인 작업의 참고가 될 레퍼런스를 3개 이상 등록해주세요
      </SystemMessage>
      <EarthImgBox>
        <EarthImgContainer>
          <EarhImg></EarhImg>
        </EarthImgContainer>
        <RefLink
          as="a"
          onClick={() =>
            window.open(
              "https://di-kkak.notion.site/b45ac65c15c5495fad9539ea616172ef",
              "_blank"
            )
          }
        >
          레퍼런스 참고 페이지 알아보기
        </RefLink>
      </EarthImgBox>

      {referenceFile?.map((item, index) => (
        <UploadBox key={index}>
          <UploadContainer>
            <ContentBox>
              <FileUploadLabel bgcolor="#fff" borderColor="#905DFB">
                <PreviewImg
                  url={item.url}
                  onClick={() =>
                    onImageClick(item.url, item.fileName, index + 1)
                  }
                />
              </FileUploadLabel>
              <TextContainer>
                <Text>{item.description}</Text>
              </TextContainer>
            </ContentBox>
          </UploadContainer>
        </UploadBox>
      ))}
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalReference;

const UploadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  &:first-child {
    margin-top: 15px;
  }
`;

const UploadContainer = styled.div`
  width: 679px;
  height: 140px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

const ContentBox = styled.div`
  position: relative;
  width: 630px;
  height: 114px;
  display: flex;
  justify-content: space-between;
`;

const FileUploadLabel = styled.label<{
  bgcolor?: string;
  borderColor?: string;
}>`
  width: 200px;
  height: 114px;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid #c4c4c4;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  width: 426px;
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0px;
  white-space: pre-wrap;
  word-break: break-all;
`;
const PreviewImg = styled.div<{ url?: string }>`
  background-image: url(${(props) => props.url || ""});
  width: 200px;
  height: 112px;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 426px;
  height: 114px;
  background-color: ${(props) => props.theme.mainColor};
  border: 1px solid ${(props) => props.theme.mainColor};
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 15px;
  overflow-y: scroll;
`;
