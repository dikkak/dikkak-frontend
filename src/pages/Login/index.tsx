import React from "react";
import Menu from "../../components/Menu";
import { Navigate, useNavigate } from "react-router-dom";
import * as S from "./styles";
import facebook from "../../assets/logoImage/facebookLogin.svg";
import kakao from "../../assets/logoImage/kakaoLogin.svg";
import google from "../../assets/logoImage/googleLogin.svg";
import {
  FACEBOOK_AUTH_URL,
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_URL,
} from "../../OAuth";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";
import Footer from "../../components/Footer";
import { FaSpinner } from "react-icons/fa";

const Login = () => {
  const { data, isFetching } = useQuery("user-info", userInfo);
  const navigate = useNavigate();

  if (isFetching)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  if (data) {
    return <Navigate to="/service_start" />;
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
            <S.Contents>
              <S.Title>
                <h1 style={{ display: "inline-block" }}>로그인</h1>
                <S.LogoImage />
              </S.Title>
              <S.SocialLoginSection>
                <S.SocialLogin as="a" href={KAKAO_AUTH_URL}>
                  <S.SocialLogo src={kakao} />
                  <p>카카오</p>
                </S.SocialLogin>
                <S.SocialLogin as="a" href={GOOGLE_AUTH_URL}>
                  <S.SocialLogo src={google} />
                  <p>구글</p>
                </S.SocialLogin>
                <S.SocialLogin as="a" href={FACEBOOK_AUTH_URL}>
                  <S.SocialLogo src={facebook} />
                  <p>페이스북</p>
                </S.SocialLogin>
              </S.SocialLoginSection>
              <S.Buttons>
                <S.Slogan>빠르고 쉬운 아웃소싱 플랫폼 DIKKAK</S.Slogan>
                <S.SignUp onClick={() => navigate("/signup")}>
                  아직 회원이 아니신가요?👉3초안에 가입하기
                </S.SignUp>
              </S.Buttons>
            </S.Contents>
          </S.Board>
        </S.Wrapper>
      </S.Container>
      <Footer bgColor="#fff" />
    </>
  );
};

export default Login;
