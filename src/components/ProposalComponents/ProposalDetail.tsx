import React from "react";
import styled from "styled-components";
import questionBox from "../../assets/workspaceImage/questionBox.png";
import {
  Circle,
  DetailGrid,
  GridItem,
  Line,
  SystemMessage,
  WorkTitle,
} from "./styles";

interface IProposalDetailProps {
  category: string | undefined;
  detail: string | undefined;
  detailRef: React.RefObject<HTMLHeadingElement>;
}

const ProposalDetail = ({
  category,
  detail,
  detailRef,
}: IProposalDetailProps) => {
  return (
    <>
      <WorkTitle ref={detailRef} id="detail">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        세부사항 선택
      </WorkTitle>
      {category === "LOGO_OR_CARD" && (
        <>
          <SystemMessage width="290px">
            맡기고자 하는 디자인 분야를 선택해주세요
          </SystemMessage>
          <DetailGrid>
            <GridItem isActive={detail === "logo"}>로고</GridItem>
            <GridItem isActive={detail === "nameCard"}>명함</GridItem>
          </DetailGrid>
        </>
      )}
      {category === "PACKAGE" && (
        <>
          <SystemMessage width="290px">
            맡기고자 하는 디자인 범위를 선택해주세요
          </SystemMessage>
          <DetailGrid>
            <GridItem isActive={detail === "onlyDesign"}>
              단순
              <br />
              디자인
            </GridItem>
            <GridItem isActive={detail === "designAndMake"}>
              디자인
              <br />
              +
              <br />
              제작
            </GridItem>
          </DetailGrid>
        </>
      )}
      {category === "POSTER_LEAFLET" && (
        <>
          <SystemMessage width="290px">
            맡기고자 하는 디자인 분야를 선택해주세요
          </SystemMessage>
          <DetailGrid>
            <GridItem isActive={detail === "poster"}>포스터</GridItem>
            <GridItem isActive={detail === "leaflet"}>리플렛</GridItem>
          </DetailGrid>
        </>
      )}
      {category === "LANDING_PAGE" && (
        <>
          <SystemMessage width="290px">
            맡기고자 하는 작업의 범위를 선택해주세요
          </SystemMessage>
          <DetailGrid>
            <GridItem isActive={detail === "onlyDesign"}>디자인만</GridItem>
            <GridItem isActive={detail === "designAndPublishing"}>
              퍼블리싱
              <br />
              까지
            </GridItem>
          </DetailGrid>
        </>
      )}
      {category === "DETAIL_PAGE" && (
        <>
          <SystemMessage width="320px">
            맡기고자 하는 제품의 촬영 유무를 선택해주세요
          </SystemMessage>
          <DetailGrid>
            <GridItem isActive={detail === "requirePhoto"}>필요함</GridItem>
            <GridItem isActive={detail === "noRequirePhoto"}>필요없음</GridItem>
          </DetailGrid>
        </>
      )}
      {category === "VIDEO_EDITING" && (
        <>
          <SystemMessage width="609px">
            맡기고자 하는 제품의 영상 원본 길이를 선택해주세요
            <p style={{ fontSize: "10px", marginTop: "3px" }}>
              &nbsp;(기타를 선택한 경우 해당 내용을 사용 목적 단계에 적어주세요)
            </p>
          </SystemMessage>
          <DetailGrid>
            <GridItem isActive={detail === "within5minutes"}>
              5분
              <br />
              이내
            </GridItem>
            <GridItem isActive={detail === "within10minutes"}>
              10분
              <br />
              이내
            </GridItem>
            <GridItem isActive={detail === "within30minutes"}>
              30분
              <br />
              이내
            </GridItem>
            <GridItem isActive={detail === "within1hour"}>
              1시간
              <br />
              이내
            </GridItem>
            <GridItem isActive={detail === "within2hours"}>
              2시간
              <br />
              이내
            </GridItem>
            <GridItem isActive={detail === "other"}>기타</GridItem>
          </DetailGrid>
        </>
      )}
      {category === "PRODUCT_3D" && (
        <>
          <SystemMessage width="451px">
            어떤 모델링이 필요한가요?
            <p style={{ fontSize: "10px", marginTop: "3px" }}>
              &nbsp;(기타를 선택한 경우 해당 내용을 사용 목적 단계에 적어주세요)
            </p>
          </SystemMessage>
          <ModelingDesc>
            <QuestionBox />
            <DescList>
              <li>초급: 간단한 도형 기반의 제품</li>
              <li>중급: 캐릭터 등 다소 복잡한 구조의 제품</li>
              <li>고급: 실사인체, 자동차 등의 복잡한 구조의 제품</li>
            </DescList>
          </ModelingDesc>
          <DetailGrid>
            <GridItem isActive={detail === "basic"}>초급</GridItem>
            <GridItem isActive={detail === "intermediate"}>중급</GridItem>
            <GridItem isActive={detail === "advanced"}>고급</GridItem>
            <GridItem isActive={detail === "other"}>기타</GridItem>
          </DetailGrid>
        </>
      )}
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalDetail;

const ModelingDesc = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 10px;
`;
const QuestionBox = styled.img.attrs({ src: questionBox })`
  width: 30px;
  height: 30px;
`;
const DescList = styled.ul`
  transform: translateX(20px);
  color: ${(props) => props.theme.mainColor};
  font-size: 10px;
  list-style: disc;
  font-weight: 900;
  & > li {
    line-height: 15px;
  }
`;
