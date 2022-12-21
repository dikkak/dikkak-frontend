import React, { useState } from "react";
import * as S from "./styles";

const Timeline = () => {
  const [isFold, setIsFold] = useState(false);
  return (
    <S.BlurBackground isFold={isFold}>
      {isFold ? (
        <>
          <S.BlurPin />
          <S.RightArrow onClick={() => setIsFold(false)} />
          <S.BlurPin />
          <div></div>
          <S.SideTitle>%</S.SideTitle>
        </>
      ) : (
        <>
          <S.BlurPin />
          <S.LeftArrow onClick={() => setIsFold(true)} />
          <S.BlurPin />
          <S.BlurPin />
          <S.SideTitle>진척도</S.SideTitle>
          <S.TimeLine>
            <S.Outer>
              <S.TimeStep>10%</S.TimeStep>
              <S.TimeStep>20%</S.TimeStep>
              <S.TimeStep>30%</S.TimeStep>
              <S.TimeStep>40%</S.TimeStep>
              <S.TimeStep>50%</S.TimeStep>
              <S.TimeStep>60%</S.TimeStep>
              <S.TimeStep>70%</S.TimeStep>
              <S.TimeStep>80%</S.TimeStep>
              <S.TimeStep>90%</S.TimeStep>
              <S.TimeStep>100%</S.TimeStep>
            </S.Outer>
          </S.TimeLine>
        </>
      )}
    </S.BlurBackground>
  );
};

export default Timeline;
