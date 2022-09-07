import React from "react";
import styled from "styled-components";
import { BlurBackground, BlurPin, SideTitle } from "./styles";

interface IProps {
  onMoveToElement: (element: string) => void;
}

const TimeLineBox = ({ onMoveToElement }: IProps) => {
  return (
    <BlurBackground>
      <BlurPin />
      <BlurPin />
      <BlurPin />
      <BlurPin />
      <SideTitle>STEP</SideTitle>
      <TimeLine>
        <Outer>
          <TimeStep onClick={() => onMoveToElement("title")}>제목입력</TimeStep>
          <TimeStep onClick={() => onMoveToElement("choice")}>
            작업선택
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("detail")}>
            세부사항
            <br />
            선택
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("purpose")}>
            사용목적
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("keyword")}>
            키워드
            <br />
            선택
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("deadline")}>
            마감기간
            <br />
            선택
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("color")}>컬러선택</TimeStep>
          <TimeStep onClick={() => onMoveToElement("reference")}>
            레퍼런스
            <br />
            등록
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("etc")}>
            기타 파일
            <br />
            업로드 <p style={{ display: "inline", fontSize: "10px" }}>(선택)</p>
          </TimeStep>
          <TimeStep onClick={() => onMoveToElement("additional")}>
            추가요청
            <br />
            사항 <p style={{ display: "inline", fontSize: "10px" }}>(선택)</p>
          </TimeStep>
          <TimeStep>제출하기</TimeStep>
        </Outer>
      </TimeLine>
    </BlurBackground>
  );
};

export default TimeLineBox;

const TimeLine = styled.div`
  width: 55%;
  margin: 50px auto;
  height: 70%;
`;
const Outer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;
const TimeStep = styled.div`
  color: ${(props) => props.theme.mainColor};
  position: relative;
  padding: 0 0 0 20px;
  font-size: 12px;
  border-left: 1px solid ${(props) => props.theme.mainColor};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    color: ${(props) => props.theme.subColor};
  }
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme.mainColor};
    border: 3px solid ${(props) => props.theme.mainColor};
    border-radius: 999px;
    left: -8.5px;
  }
`;
