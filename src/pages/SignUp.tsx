import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import blurPin from "../assets/mainPageImage/blurPin.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import logoImg from "../assets/logoImage/logoBasic.svg";
import kakaoImg from "../assets/logoImage/kakaoBtnImg.svg";
import googleImg from "../assets/logoImage/googleBtnImg.svg";
import facebookImg from "../assets/logoImage/faceboonBtnImg.svg";

interface ButtonColorProps {
  bgColor: string;
  textColor: string;
}

interface ImgUrlProps {
  url: string;
}

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
`;

const Board = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 487px;
  padding: 40px 0;
  background-color: rgba(219, 219, 219, 0.15);
  border: 1px solid #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  top: 107px;
`;

const BackButton = styled.div`
  position: relative;
  top: 20px;
  left: 0;
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
  &:first-child {
    top: 20px;
    left: 20px;
  }
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
const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  top: 52px;
  font-family: "Noto Sans KR";
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 30px;
    }
  }
  & p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
    padding: 8px 0;
    color: #717171;
    font-family: "Noto Sans KR";
  }
`;

const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-right: 1em;
  width: 30px;
  height: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 220px;
  width: 100%;
  margin-bottom: 37px;
`;

const Button = styled.button<ButtonColorProps>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  width: 37%;
  max-width: 373px;
  font-size: 15px;
  height: 38px;
  border: 0;
  margin-bottom: 10px;
  padding: 7px 0px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-weight: 700;
`;

const BrandLogo = styled.img.attrs((props: ImgUrlProps) => ({
  src: props.url,
}))<ImgUrlProps>`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  border: 0;
`;

const SignUp = () => {
  const navigate = useNavigate();
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
              <Button bgColor="#f7e600" textColor="#000">
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
                <p>이메일로 가입하기</p>
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
