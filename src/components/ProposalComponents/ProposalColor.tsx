import React, { Fragment } from "react";
import styled from "styled-components";
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

interface IProposalColorProps {
  mainColor: string | undefined;
  subColors: string[] | undefined;
  colorRef: React.RefObject<HTMLHeadingElement>;
}

const ProposalColor = ({
  mainColor,
  subColors,
  colorRef,
}: IProposalColorProps) => {
  return (
    <>
      <WorkTitle ref={colorRef} id="color">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        컬러 선택
      </WorkTitle>
      <SystemMessage width="258px" style={{ marginBottom: "10px" }}>
        디자인에 활용할 컬러를 선택해주세요
      </SystemMessage>
      <EarthImgBox>
        <EarthImgContainer>
          <EarhImg></EarhImg>
        </EarthImgContainer>
        <RefLink
          as="a"
          onClick={() => window.open("https://colorhunt.co/", "_blank")}
        >
          색조합 보러가기
        </RefLink>
      </EarthImgBox>
      <EarthImgBox style={{ marginBottom: "15px" }}>
        <EarthImgContainer>
          <EarhImg></EarhImg>
        </EarthImgContainer>
        <RefLink
          as="a"
          onClick={() =>
            window.open(
              "http://xtremebrandmakeover.com/color-meaning-chart/",
              "_blank"
            )
          }
        >
          색 별 의미 (영어주의😂)
        </RefLink>
      </EarthImgBox>
      <ClientMessage>
        <InnerContainer>
          <Box bgcolor={mainColor}></Box>
          <ColorText style={{ color: mainColor }}>{mainColor}</ColorText>
          <p>메인컬러</p>
        </InnerContainer>
      </ClientMessage>
      {subColors &&
        subColors.map((item, index) => (
          <Fragment key={index}>
            <ClientMessage>
              <InnerContainer>
                <Box bgcolor={item}></Box>
                <ColorText style={{ color: item }}>{item}</ColorText>
                <p>서브컬러</p>
              </InnerContainer>
            </ClientMessage>
          </Fragment>
        ))}
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalColor;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
const Box = styled.div<{ bgcolor?: string }>`
  display: flex;
  flex-basis: 60%;
  align-items: center;
  justify-content: center;
  height: 15px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
`;

const ColorText = styled.span`
  flex-basis: 20%;
`;
const ClientMessage = styled.div`
  position: relative;
  /* left: 32px; */
  height: 35px;
  width: 679px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: right;
  align-items: center;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  font-size: 15px;
  margin: 0 auto;
  margin-bottom: 10px;
  padding-right: 20px;
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
