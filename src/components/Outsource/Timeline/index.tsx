import React from "react";
import * as S from "./styles";

const Timeline = () => {
  return (
    <S.BlurBackground>
      <S.BlurPin />
      <S.BlurPin />
      <S.BlurPin />
      <S.BlurPin />
      <S.SideTitle>STEP</S.SideTitle>
      <S.TimeLine>
        <S.Outer>
          <S.TitleTimeStep>
            작업내용
            <br />
            확인
          </S.TitleTimeStep>
          <S.WorkTimeStep>
            커뮤니케이션
            <br />
            일정확인
          </S.WorkTimeStep>
          <S.DetailTimeStep>1차 작업</S.DetailTimeStep>
          <S.PurposeTimeStep>1차 컨펌</S.PurposeTimeStep>
          <S.KeyWordTimeStep>2차 작업</S.KeyWordTimeStep>
          <S.DeadLineTimeStep>2차 컨펌</S.DeadLineTimeStep>
          <S.ColorTimeStep>3차 작업</S.ColorTimeStep>
          <S.ReferenceTimeStep>3차 컨펌</S.ReferenceTimeStep>
          <S.EtcTimeStep>
            최종 작업물
            <br />
            전달 및 수령
            <br />
            (잔금수령)
          </S.EtcTimeStep>
          <S.SubmitTimeStep>제출하기</S.SubmitTimeStep>
        </S.Outer>
      </S.TimeLine>
    </S.BlurBackground>
  );
};

export default Timeline;
