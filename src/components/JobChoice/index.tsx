import React from "react";
import { JobChoiceBox, SystemMessage, Grid, GridChildren } from "./styles";
const JobChoice = () => {
  return (
    <JobChoiceBox>
      <SystemMessage>맡기고자 하는 디자인 분야를 선택해주세요</SystemMessage>
      <Grid>
        <GridChildren>
          로고
          <br />
          or
          <br />
          명함
        </GridChildren>
        <GridChildren>패키지</GridChildren>
        <GridChildren>
          상세
          <br />
          페이지
        </GridChildren>
        <GridChildren>
          영상
          <br />
          편집
        </GridChildren>
        <GridChildren>
          제품
          <br />
          (3D)
        </GridChildren>
        <GridChildren>
          포스터
          <br />
          or
          <br />
          리플렛
        </GridChildren>
        <GridChildren>
          렌딩
          <br />
          페이지
        </GridChildren>
        <GridChildren>기타</GridChildren>
      </Grid>
    </JobChoiceBox>
  );
};

export default JobChoice;
