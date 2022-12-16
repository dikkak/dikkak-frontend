import React, { useState } from "react";
import * as S from "./styles";

const WindowTab = () => {
  const [isFold, setIsFold] = useState(false);
  return (
    <S.BlurBackground isFold={isFold}>
      {isFold ? (
        <>
          <S.LeftArrow onClick={() => setIsFold(false)} />
          <S.BlurPin />
          <div></div>
          <S.BlurPin />
        </>
      ) : (
        <>
          <S.RightArrow onClick={() => setIsFold(true)} />
          <S.BlurPin />
          <S.BlurPin />
          <S.BlurPin />
          <S.SideTitle>WINDOW</S.SideTitle>
        </>
      )}
    </S.BlurBackground>
  );
};

export default WindowTab;
