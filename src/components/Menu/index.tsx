import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.MenuCotainer>
        <S.Title
          onClick={() => {
            navigate("/");
          }}
        >
          <S.LogoImage />
          <S.LogoTitle>
            <S.LogoName>DIKKAK</S.LogoName>
            <S.LogoSubName>: 디자인을 깎다</S.LogoSubName>
          </S.LogoTitle>
        </S.Title>
      </S.MenuCotainer>
    </S.Container>
  );
};

export default Menu;
