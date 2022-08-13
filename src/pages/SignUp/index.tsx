import React, { useEffect, useRef } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import kakaoImg from "../../assets/logoImage/kakaoBtnImg.svg";
import googleImg from "../../assets/logoImage/googleBtnImg.svg";
import facebookImg from "../../assets/logoImage/faceboonBtnImg.svg";
import jwt_decode from "jwt-decode";

import {
  BackButton,
  BlurPin,
  Board,
  BrandLogo,
  Button,
  ButtonGroup,
  Container,
  LogoImage,
  Title,
  Wrapper,
  GoogleButton,
} from "./styles";
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleCallbackResponse(response: object | any) {
    console.log("Encoded JWT ID token : " + response.credential);
    let userObj: JSON = jwt_decode(response.credential);
    console.log(userObj);

    if (userObj) {
      window.location.href = GOOGLE_AUTH_URL;
    }
  }

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id:
        "207947649222-dg6cnt4v9mgfh094d28t2a0544s50uk1.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(buttonRef.current, {
      width: "373",
      text: "signup_with",
      shape: "rectangular",
    });

    window.google.accounts.id.prompt();
  }, [window.google]);

  if (data) {
    return <Navigate replace to="/service_start" />;
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
            <Title>
              <div>
                <h1>회원가입</h1>
                <LogoImage></LogoImage>
              </div>
              <p>디깎은 디자이너의 성장을 도모합니다</p>
            </Title>
            <ButtonGroup>
              <Button
                as="a"
                href={KAKAO_AUTH_URL}
                bgColor="#f7e600"
                textColor="#000"
              >
                <BrandLogo url={kakaoImg}></BrandLogo>
                <p>카카오톡 간편 가입하기</p>
              </Button>
              <GoogleButton
                ref={buttonRef}
                bgColor="#fff"
                textColor="#000"
                id="g_id_signin"
              >
                <BrandLogo url={googleImg}></BrandLogo>
                <p>구글 간편 가입하기</p>
              </GoogleButton>
              <Button
                as="a"
                href={FACEBOOK_AUTH_URL}
                bgColor="#1877F2"
                textColor="#fff"
              >
                <BrandLogo url={facebookImg}></BrandLogo>
                <p>페이스북 간편 가입하기</p>
              </Button>

              <Button
                style={{ marginTop: "10px" }}
                bgColor="#000"
                textColor="#fff"
              >
                <p style={{ textDecoration: "none", color: "#fff" }}>
                  가입 문의하기
                </p>
              </Button>
            </ButtonGroup>
          </Board>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff" />
    </>
  );
};

export default SignUp;
