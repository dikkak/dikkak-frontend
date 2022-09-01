import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import kakaoImg from "../../assets/logoImage/kakaoBtnImg.svg";
import googleImg from "../../assets/logoImage/googleBtnImg.svg";
import facebookImg from "../../assets/logoImage/faceboonBtnImg.svg";

import * as S from "./styles";
import {
  KAKAO_AUTH_URL,
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
} from "../../OAuth";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";

const SignUp = () => {
  const { data } = useQuery("user-info", userInfo);
  const navigate = useNavigate();

  if (data) {
    return <Navigate replace to="/service_start" />;
  }

  return (
    <>
      <Menu />
      <S.Container>
        <S.Wrapper>
          <S.BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </S.BackButton>
          <S.Board>
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.Title>
              <div>
                <h1>회원가입</h1>
                <S.LogoImage />
              </div>
              <p>디깍은 디자이너의 성장을 도모합니다</p>
            </S.Title>
            <S.ButtonGroup>
              <S.Button
                as="a"
                href={KAKAO_AUTH_URL}
                bgColor="#f7e600"
                textColor="#000"
              >
                <S.BrandLogo url={kakaoImg} />
                <p>카카오톡 간편 가입하기</p>
              </S.Button>
              <S.Button
                as="a"
                href={GOOGLE_AUTH_URL}
                bgColor="#ffffff"
                textColor="#000"
              >
                <S.BrandLogo url={googleImg} />
                <p>구글 간편 가입하기</p>
              </S.Button>
              <S.Button
                as="a"
                href={FACEBOOK_AUTH_URL}
                bgColor="#1877F2"
                textColor="#fff"
              >
                <S.BrandLogo url={facebookImg} />
                <p>페이스북 간편 가입하기</p>
              </S.Button>
              <S.Button
                style={{ marginTop: "10px" }}
                bgColor="#000"
                textColor="#fff"
              >
                <a
                  style={{ textDecoration: "none", color: "#fff" }}
                  href="https://open.kakao.com/o/sUAISbxe"
                >
                  가입 문의하기
                </a>
              </S.Button>
            </S.ButtonGroup>
          </S.Board>
        </S.Wrapper>
      </S.Container>
      <Footer bgColor="#fff" />
    </>
  );
};

export default SignUp;
