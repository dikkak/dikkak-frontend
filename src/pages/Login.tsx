import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import blurPin from "../assets/mainPageImage/blurPin.png";
import logoImg from "../assets/logoImage/logoBasic.svg";
import facebook from "../assets/logoImage/facebookLogin.svg";
import kakao from "../assets/logoImage/kakaoLogin.svg";
import google from "../assets/logoImage/googleLogin.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;

const Board = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
  padding: 40px 0;
  background-color: rgba(219, 219, 219, 0.15);
  border: 1px solid #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 5px;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    color: white;
  }
`;
const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  &:nth-child(2) {
    top: 20px;
    right: 20px;
  }
  &:nth-child(3) {
    bottom: 20px;
    left: 20px;
  }
  &:nth-child(4) {
    bottom: 20px;
    right: 20px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 900;
`;
const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 30px;
  height: 30px;
`;
const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
`;
const EmailLabel = styled.label.attrs({ htmlFor: "email" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;
const EmailInput = styled.input.attrs({
  type: "email",
  id: "email",
  placeholder: "이메일을 입력하세요",
})`
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  outline: none;
`;
const PasswordLabel = styled.label.attrs({ htmlFor: "password" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-top: 1em;
  margin-bottom: 1em;
`;
const PasswordInput = styled(EmailInput).attrs({
  type: "password",
  id: "password",
  placeholder: "비밀번호를 입력하세요",
})``;
const SubmitButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  margin-top: 1em;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const NextText = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLogo = styled.img`
  width: 60px;
  height: 60px;
`;

const SocialLoginSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 2em 0;
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    margin-top: 0.5em;
    color: #717171;
    font-size: 0.8rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const FindIDPW = styled.button`
  width: 100%;
  padding: 0.5em;
  color: white;
  background-color: ${(props) => props.theme.subColor};
  font-weight: 500;
  font-size: 0.8rem;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const SignUp = styled(FindIDPW)`
  background-color: ${(props) => props.theme.mainColor};
  margin-top: 1em;
`;

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
              <SocialLogin>
                <SocialLogo src={kakao} />
                <p>kakao</p>
              </SocialLogin>
              <SocialLogin>
                <SocialLogo src={google} />
                <p>google</p>
              </SocialLogin>
              <SocialLogin>
                <SocialLogo src={facebook} />
                <p>facebook</p>
              </SocialLogin>
            </SocialLoginSection>
            <Buttons>
              <FindIDPW onClick={() => navigate("/findAccount")}>
                PW/ID 찾기
              </FindIDPW>
              <SignUp>아직 회원이 아니신가요?👉3초안에 가입하기</SignUp>
            </Buttons>
          </Contents>
        </Board>
      </Container>
    </>
  );
};

export default Login;
