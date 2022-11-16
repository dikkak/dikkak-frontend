import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProposal } from "../../apis/proposal";
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
import ImageOverlay from "../../components/ImageOverlay";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
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
        const offsetTitle = titleRef.current?.offsetTop;
        if (offsetTitle) {
          boxRef.current?.scrollTo({
            top: offsetTitle - 165,
            behavior: "smooth",
          });
        }
        break;
      case "choice":
        const offsetChoice = choiceRef.current?.offsetTop;
        if (offsetChoice) {
          boxRef.current?.scrollTo({
            top: offsetChoice - 165,
            behavior: "smooth",
          });
        }
        break;
      case "detail":
        const offsetDetail = detailRef.current?.offsetTop;
        if (offsetDetail) {
          boxRef.current?.scrollTo({
            top: offsetDetail - 165,
            behavior: "smooth",
          });
        }
        break;
      case "purpose":
        const offsetPurpose = purposeRef.current?.offsetTop;
        if (offsetPurpose) {
          boxRef.current?.scrollTo({
            top: offsetPurpose - 165,
            behavior: "smooth",
          });
        }
        break;
      case "keyword":
        const offsetKeyword = keywordRef.current?.offsetTop;
        if (offsetKeyword) {
          boxRef.current?.scrollTo({
            top: offsetKeyword - 165,
            behavior: "smooth",
          });
        }
        break;
      case "deadline":
        const offsetDeadline = deadlineRef.current?.offsetTop;
        if (offsetDeadline) {
          boxRef.current?.scrollTo({
            top: offsetDeadline - 165,
            behavior: "smooth",
          });
        }
        break;
      case "color":
        const offsetColor = colorRef.current?.offsetTop;
        if (offsetColor) {
          boxRef.current?.scrollTo({
            top: offsetColor - 165,
            behavior: "smooth",
          });
        }
        break;
      case "reference":
        const offsetReference = referenceRef.current?.offsetTop;
        if (offsetReference) {
          boxRef.current?.scrollTo({
            top: offsetReference - 165,
            behavior: "smooth",
          });
        }
        break;
      case "etc":
        const offsetEtc = etcRef.current?.offsetTop;
        if (offsetEtc) {
          boxRef.current?.scrollTo({
            top: offsetEtc - 165,
            behavior: "smooth",
          });
        }
        break;
      case "addtional":
        const offsetAdditional = addtionalRef.current?.offsetTop;
        if (offsetAdditional) {
          boxRef.current?.scrollTo({
            top: offsetAdditional - 165,
            behavior: "smooth",
          });
        }
        break;
    }
  };

  if (isError) return <>Error</>;
  return (
    <PageContainer ref={containerRef} isReferenceClick={isRefClicked}>
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
          <Box ref={boxRef}>
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
        <ImageOverlay
          proposal={true}
          imageName={clickedImage.fileName}
          imageUrl={clickedImage.url}
          imageIndex={clickedImage.index}
          fileLength={data?.referenceFile.length}
          setIsRefClicked={setIsRefClicked}
        />
      )}
    </PageContainer>
  );
};

export default Proposal;

const PageContainer = styled.div<{ isReferenceClick: boolean }>`
  width: 100%;
  height: 100vh;
  overflow-y: ${(props) => (props.isReferenceClick ? "hidden" : "auto")};
`;
