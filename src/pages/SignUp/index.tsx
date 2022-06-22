import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import GoogleLogin from '../../components/GoogleLogin';
import { Link, useNavigate } from "react-router-dom";
import kakaoImg from "../../assets/logoImage/kakaoBtnImg.svg";
import googleImg from "../../assets/logoImage/googleBtnImg.svg";
import facebookImg from "../../assets/logoImage/faceboonBtnImg.svg";
import { BackButton, BlurPin, Board, BrandLogo, Button, ButtonGroup, Container, LogoImage, Title, Wrapper } from './styles';
import { KAKAO_AUTH_URL } from "../../OAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const onGoogleSignIn = (res: any) => {
    console.log(res);
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
              <Button bgColor="#fff" textColor="#000">
                <BrandLogo url={googleImg}></BrandLogo>
                <p>구글 간편 가입하기</p>
              </Button>
              <Button bgColor="#1877F2" textColor="#fff">
                <BrandLogo url={facebookImg}></BrandLogo>
                <p>페이스북 간편 가입하기</p>
              </Button>
              <Button
                style={{ marginTop: "10px" }}
                bgColor="#000"
                textColor="#fff"
              >
                <Link to={'/email_signup1'} style={{textDecoration:'none',color:"#fff"}}>이메일로 가입하기</Link>
              </Button>
              <GoogleLogin onGoogleSignIn={onGoogleSignIn} text="로그인" />
            </ButtonGroup>
          </Board>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff" />
    </>
  );
};

export default SignUp;