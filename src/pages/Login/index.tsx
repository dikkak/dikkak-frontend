import React from "react";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import { BackButton, BlurPin, Board, Buttons, Container, Contents, EmailInput, EmailLabel, FindIDPW, LogInForm, LogoImage, NextText, PasswordInput, PasswordLabel, SignUp, SocialLogin, SocialLoginSection, SocialLogo, SubmitButton, Title } from './styles';
import facebook from "../../assets/logoImage/facebookLogin.svg";
import kakao from "../../assets/logoImage/kakaoLogin.svg";
import google from "../../assets/logoImage/googleLogin.svg";
import { FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL, KAKAO_AUTH_URL } from '../../OAuth';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu />
      <Container>
        <Board>
          <BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <BlurPin />
          <BlurPin />
          <BlurPin />
          <Contents>
            <Title>
              <h1 style={{ display: "inline-block" }}>로그인</h1>
              <LogoImage />
            </Title>
            <LogInForm>
              <EmailLabel>이메일</EmailLabel>
              <EmailInput />
              <PasswordLabel>비밀번호</PasswordLabel>
              <PasswordInput />
              <SubmitButton>로그인</SubmitButton>
            </LogInForm>
            <NextText>
              <p style={{ color: "#717171", fontWeight: "900" }}>
                -----------------
              </p>
              <p style={{ color: "#717171", fontWeight: "900" }}>
                또는 다음으로 로그인
              </p>
              <p style={{ color: "#717171", fontWeight: "900" }}>
                -----------------
              </p>
            </NextText>
            <SocialLoginSection>
              <SocialLogin as='a' href={KAKAO_AUTH_URL}>
                <SocialLogo src={kakao} />
                <p>kakao</p>
              </SocialLogin>
              <SocialLogin as='a' href={GOOGLE_AUTH_URL}>
                <SocialLogo src={google} />
                <p>google</p>
              </SocialLogin>
              <SocialLogin as='a' href={FACEBOOK_AUTH_URL}>
                <SocialLogo src={facebook} />
                <p>facebook</p>
              </SocialLogin>
            </SocialLoginSection>
            <Buttons>
              <FindIDPW onClick={() => navigate("/findAccount")}>
                PW/ID 찾기
              </FindIDPW>
              <SignUp onClick={() => navigate("/signup")}>
                아직 회원이 아니신가요?👉3초안에 가입하기
              </SignUp>
            </Buttons>
          </Contents>
        </Board>
      </Container>
    </>
  );
};

export default Login;
