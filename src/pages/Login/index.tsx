import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BackButton,
  BlurPin,
  Board,
  Buttons,
  Container,
  Contents,
  FindIDPW,
  LogoImage,
  SignUp,
  SocialLogin,
  SocialLoginSection,
  SocialLogo,
  Title,
  Wrapper,
  GoogleButton,
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
import GoogleOauth from "../../apis/google_login_logic";

const Login = () => {
  const { data, isFetching } = useQuery("user-info", userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    const gapi = new GoogleOauth(
      "300",
      "rectangular",
      document.getElementById("g_id_signin")
    );
    console.log(gapi);
    gapi.init();
    gapi.render();
  }, [window.google]);

  if (isFetching) return <div>Loading...</div>;
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
                  <p>kakao</p>
                </SocialLogin>
                {/* <SocialLogin as="a" href={GOOGLE_AUTH_URL}>
                  <SocialLogo src={google} />
                  <p>google</p>
                </SocialLogin> */}
                <GoogleButton id="g_id_signin">
                  {/* <SocialLogo src={google} /> */}
                  <p>Google</p>
                </GoogleButton>

                <SocialLogin as="a" href={FACEBOOK_AUTH_URL}>
                  <SocialLogo src={facebook} />
                  <p>facebook</p>
                </SocialLogin>
              </SocialLoginSection>
              <Buttons>
                <FindIDPW onClick={() => navigate("/findAccount")}>
                  회원가입한 계정 찾기
                </FindIDPW>
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
