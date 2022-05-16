import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ClientOrDesigner from "../components/ClientOrDesigner";
import mainBackgroundImg from "../assets/mainPageImage/jumbotron.svg";
import blurPin from "../assets/mainPageImage/blurPin.png";
import logoImg from "../assets/logoImage/logoBasic.svg";
import letterLogo from "../assets/logoImage/letterLogo.svg";
import paintLogo from "../assets/logoImage/pencilPaint.png";

const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

const JumboCotainer = styled.div`
  width: 100%;
  height: 485px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 0 80px;
  overflow-x: hidden;
`;

const Jumbotron = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1116px;
  height: 100%;
  margin: 0 auto;
  background-image: url(${mainBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const BlurBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  max-width: 827px;
  min-width: 600px;
  height: 80%;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border: 0.5px solid #eee;
  box-shadow: 5px 5px 15px #ccc;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
  top: 52px;
  font-family: "Noto Sans KR";
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        line-height: 16px;
        letter-spacing: 2px;
        margin-top: 7px;

        color: #717171;
        font-family: "Noto Sans KR";
      }
    }
  }
`;

const BackButton = styled.div`
  position: absolute;
  top: -50px;
  left: 20%;
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
  &:nth-child(1) {
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

// logos
const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 52px;
  margin-right: 10px;
  height: 52px;
`;

const LetterLogo = styled.img.attrs({ src: letterLogo })`
  height: 22px;
  width: auto;
`;

const PaintLogo = styled.img.attrs({ src: paintLogo })`
  margin-left: 5px;
  width: 140px;
  height: 90px;
`;

// content
const Content = styled.div`
  position: relative;
  top: -120px;
  width: 100%;
  padding: 0 10%;
  height: auto;
`;

const ContentDesc = styled.p`
  border: 2px solid ${(props) => props.theme.subColor};
  width: 100%;
  font-weight: 500;
  font-family: "Noto Sans KR";
  font-size: 1rem;
  text-align: left;
  color: #717171;
  line-height: 29px;
  padding: 10px 0;
`;

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu />
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          <p>◀︎</p>
          <p>이전으로 돌아가기</p>
        </BackButton>
        <JumboCotainer>
          <Jumbotron>
            <BlurBackground>
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <Title>
                <div>
                  <LogoImage></LogoImage>
                  <div>
                    <LetterLogo></LetterLogo>
                    <p>: 디자인을 깎다</p>
                  </div>
                  <PaintLogo></PaintLogo>
                </div>
              </Title>
              <Content>
                <ContentDesc>
                  MZ가 작업하는 빠르고-쉬운 디자인 아웃소싱 플랫폼
                </ContentDesc>
                <ClientOrDesigner></ClientOrDesigner>
              </Content>
            </BlurBackground>
          </Jumbotron>
        </JumboCotainer>
        <Footer bgColor="#fff" />
      </Container>
    </>
  );
};

export default Start;
