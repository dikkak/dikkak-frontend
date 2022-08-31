import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProposal } from "../../apis/proposal";
import logoWhite from "../../assets/logoImage/logoWhite.svg";
import downloadImg from "../../assets/logoImage/downloadImg.svg";
import closeImg from "../../assets/logoImage/closeImg.svg";
import Menu from "../../components/Menu";
import {
  Box,
  BoxContent,
  Container,
  Content,
  Header,
  LogoImage,
  Title,
} from "./styles";
import TimeLineBox from "../../components/ProposalComponents/TimeLineBox";
import FileBox from "../../components/ProposalComponents/FileBox";
import ProposalTitle from "../../components/ProposalComponents/ProposalTitle";
import ProposalChoice from "../../components/ProposalComponents/ProposalChoice";
import ProposalDetail from "../../components/ProposalComponents/ProposalDetail";
import ProposalPurpose from "../../components/ProposalComponents/ProposalPurpose";
import ProposalKeyword from "../../components/ProposalComponents/ProposalKeyword";
import ProposalDeadLine from "../../components/ProposalComponents/ProposalDeadLine";
import ProposalColor from "../../components/ProposalComponents/ProposalColor";
import ProposalReference from "../../components/ProposalComponents/ProposalReference";
import ProposalEtc from "../../components/ProposalComponents/ProposalEtc";
import ProposalAddRequirement from "../../components/ProposalComponents/ProposalAddRequirement";
import Footer from "../../components/Footer";
import { useRef } from "react";
import styled from "styled-components";
import Toast from "../../components/Toast";
import { onDownload } from "../../utils/onDownload";

const Proposal = () => {
  const params = useParams(); // 제안서의 id를 받아오기 위한 params
  const proposalId = params.id || ""; // 현재 페이지의 제안서 id

  // useQuery훅을 사용해서 getProposal 메소드를 사용해서 제안서의 데이터를 받아옴
  const { data, isError } = useQuery(
    ["proposal", proposalId],
    () => getProposal(proposalId),
    {
      retry: 0,
    }
  );

  const [isActive, setIsActive] = useState(false);

  // 레퍼런스 이미지 파일의 미리보기의 클릭 상태
  const [isRefClicked, setIsRefClicked] = useState(false);

  // 레퍼런스 이미지 파일 중 현재 클릭된 이미지파일의 정보를 담은 state
  const [clickedImage, setClickedImage] = useState<{
    url: string;
    fileName: string;
    index: number;
  }>({
    url: "",
    fileName: "",
    index: 0,
  });

  // 각 step의 ref를 선언하여 step에서 단계를 클릭시 바로가기가 가능하도록 하기 위해 컴포넌트별 ref 선언
  const titleRef = useRef<HTMLHeadingElement>(null);
  const choiceRef = useRef<HTMLHeadingElement>(null);
  const detailRef = useRef<HTMLHeadingElement>(null);
  const purposeRef = useRef<HTMLHeadingElement>(null);
  const keywordRef = useRef<HTMLHeadingElement>(null);
  const deadlineRef = useRef<HTMLHeadingElement>(null);
  const colorRef = useRef<HTMLHeadingElement>(null);
  const referenceRef = useRef<HTMLHeadingElement>(null);
  const etcRef = useRef<HTMLHeadingElement>(null);
  const addtionalRef = useRef<HTMLHeadingElement>(null);

  // step에서 클릭된 스텝의 컴포넌트로 스크롤하는 함수
  const onMoveToElement = (step: string) => {
    switch (step) {
      case "title":
        titleRef.current?.scrollIntoView();
        break;
      case "choice":
        choiceRef.current?.scrollIntoView();
        break;
      case "detail":
        detailRef.current?.scrollIntoView();
        break;
      case "purpose":
        purposeRef.current?.scrollIntoView();
        break;
      case "keyword":
        keywordRef.current?.scrollIntoView();
        break;
      case "deadline":
        deadlineRef.current?.scrollIntoView();
        break;
      case "color":
        colorRef.current?.scrollIntoView();
        break;
      case "reference":
        referenceRef.current?.scrollIntoView();
        break;
      case "etc":
        etcRef.current?.scrollIntoView();
        break;
      case "addtional":
        addtionalRef.current?.scrollIntoView();
        break;
    }
    window.scrollTo(0, 0);
  };

  if (isError) return <>Error</>;
  return (
    <>
      <Menu />
      <Container>
        <Header>
          <Title>
            <h1>{data?.client}의 제안서</h1>
            <LogoImage />
          </Title>
        </Header>
        <Content>
          <TimeLineBox onMoveToElement={onMoveToElement} />
          <Box>
            <BoxContent>
              <ProposalTitle titleRef={titleRef} title={data?.title} />
              <ProposalChoice choiceRef={choiceRef} category={data?.category} />
              {data?.detail && (
                <ProposalDetail
                  detailRef={detailRef}
                  category={data?.category}
                  detail={data?.detail}
                />
              )}

              <ProposalPurpose
                purposeRef={purposeRef}
                purpose={data?.purpose}
              />
              <ProposalKeyword
                keywordRef={keywordRef}
                keywords={data?.keywords}
              />
              <ProposalDeadLine
                deadlineRef={deadlineRef}
                deadline={data?.deadline}
              />
              <ProposalColor
                colorRef={colorRef}
                mainColor={data?.mainColor}
                subColors={data?.subColors}
              />
              <ProposalReference
                referenceRef={referenceRef}
                referenceFile={data?.referenceFile}
                setIsRefClicked={setIsRefClicked}
                setClickedImage={setClickedImage}
              />
              {data?.etcFile?.length !== 0 && (
                <ProposalEtc etcRef={etcRef} etcFile={data?.etcFile} />
              )}
              {data?.additionalDesc !== "" && (
                <ProposalAddRequirement
                  additionalRef={addtionalRef}
                  requestMessage={data?.additionalDesc}
                />
              )}
            </BoxContent>
          </Box>
          <FileBox
            referenceFile={data?.referenceFile}
            etcFile={data?.etcFile}
          />
        </Content>
      </Container>
      <Footer bgColor="#EFEFEF" />

      {/* 레퍼런스 이미지가 클릭되면 Overlay가 보이도록 함 */}
      {isRefClicked && (
        <Overlay>
          <IndexBox>
            <h1>
              ({clickedImage.index}/{data?.referenceFile.length})
            </h1>
            <img src={logoWhite} alt="logoWhite" />
          </IndexBox>
          <ContentBox>
            <h1>
              제안서 작업실 {">"} 레퍼런스 등록 {">"} {clickedImage.fileName}
            </h1>
            <p>
              *정확한 이미지가 아닐 수 있습니다. 다운로드 받아 정확한 이미지를
              확인해주세요.
            </p>
            <ImageBox>
              <img src={clickedImage.url} alt="clickedImage" />
            </ImageBox>
          </ContentBox>
          <ButtonsBox>
            <Download
              onClick={() => {
                onDownload(
                  clickedImage.url.split(
                    "https://dikkak.s3.ap-northeast-2.amazonaws.com/"
                  )[1],
                  clickedImage.fileName,
                  setIsActive
                );
              }}
            />
            <Close onClick={() => setIsRefClicked(false)} />
          </ButtonsBox>
          <Toast
            isActive={isActive}
            setIsActive={setIsActive}
            message={"파일 다운로드가 완료되었습니다!"}
          />
        </Overlay>
      )}
    </>
  );
};

export default Proposal;

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;
const CommonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  color: white;
`;
const IndexBox = styled(CommonBox)`
  flex-basis: 30%;
  & > h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const ContentBox = styled(CommonBox)`
  flex-basis: 40%;
  overflow: scroll;
  & > h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  & > p {
    font-size: 10px;
    margin-bottom: 25px;
  }
`;
const ButtonsBox = styled(CommonBox)`
  flex-basis: 30%;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
`;
const Download = styled.img.attrs({ src: downloadImg, alt: "downloadImg" })`
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Close = styled.img.attrs({ src: closeImg, alt: "closeImg" })`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
