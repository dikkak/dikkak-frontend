import React from "react";
import Menu from "../../components/Menu";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BackButton,
  BlurPin,
  Board,
  Buttons,
  Container,
  Contents,
  LoadingContainer,
  LogoImage,
  SignUp,
  Slogan,
  SocialLogin,
  SocialLoginSection,
  SocialLogo,
  Title,
  Wrapper,
} from "./styles";
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
      <LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </LoadingContainer>
    );
  if (data) {
    return <Navigate to="/service_start" />;
  }

  return (
    <>
      <Menu />
      <Container>
        <Wrapper>
          <BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <Board>
            <BlurPin />
            <BlurPin />
            <BlurPin />
            <BlurPin />
            <Contents>
              <Title>
                <h1 style={{ display: "inline-block" }}>로그인</h1>
                <LogoImage />
              </Title>
              <SocialLoginSection>
                <SocialLogin as="a" href={KAKAO_AUTH_URL}>
                  <SocialLogo src={kakao} />
                  <p>카카오</p>
                </SocialLogin>
                <SocialLogin as="a" href={GOOGLE_AUTH_URL}>
                  <SocialLogo src={google} />
                  <p>구글</p>
                </SocialLogin>
                <SocialLogin as="a" href={FACEBOOK_AUTH_URL}>
                  <SocialLogo src={facebook} />
                  <p>페이스북</p>
                </SocialLogin>
              </SocialLoginSection>
              <Buttons>
                <Slogan>빠르고 쉬운 아웃소싱 플랫폼 DIKKAK</Slogan>
                <SignUp onClick={() => navigate("/signup")}>
                  아직 회원이 아니신가요?👉3초안에 가입하기
                </SignUp>
              </Buttons>
            </Contents>
          </Board>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff" />
    </>
  );
};

export default Login;
