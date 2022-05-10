import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import mainBackgroundImg from "../assets/mainPageImage/jumbotron.svg";
import blurPin from "../assets/mainPageImage/blurPin.png";
import blurLogo from "../assets/logoImage/blurLogo.svg";
import stepImg from "../assets/mainPageImage/nextStep.svg";
import mowImg from "../assets/mainPageImage/mow.svg";
import firstImg from "../assets/mainPageImage/firstImage.png";
import secondImg from "../assets/mainPageImage/secondImage.png";
import thirdImg from "../assets/mainPageImage/thirdImage.png";
import fourthImg from "../assets/mainPageImage/fourthImage.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// Components style code

const JumboCotainer = styled.div`
  max-width: 1440px;
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
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 350px;
  height: 85%;
  padding-left: 3em;
  padding-right: 3em;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border: 0.5px solid #eee;
  box-shadow: 5px 5px 15px #ccc;
  &:first-child {
    margin-right: 5rem;
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
const BlurLogo = styled.img.attrs({ src: blurLogo })``;
const BlurInfo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 1.7em;
    span {
      &:first-child {
        color: ${(props) => props.theme.subColor};
        text-decoration: underline;
      }
      &:last-child {
        color: ${(props) => props.theme.mainColor};
        text-decoration: underline;
      }
    }
  }
  p {
    color: #5b5b5b;
    font-size: 0.7rem;
    line-height: 2em;
    b {
      font-weight: 1000;
    }
    &:last-child {
      margin-bottom: 4em;
    }
  }
`;

const MowImage = styled.img.attrs({ src: mowImg })`
  position: absolute;
  bottom: 4em;
  right: -5em;
`;

const BlurButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const DikkakSignUp = styled.button`
  width: 100%;
  height: 4em;
  margin-top: 5em;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 5px 5px 10px #888;
  &:hover {
    opacity: 0.8;
  }
`;
const DikkakStart = styled(DikkakSignUp)`
  margin-top: 1em;
  background-color: ${(props) => props.theme.subColor};
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden;
`;

const NextStep = styled.img.attrs({ src: stepImg })`
  width: 30px;
  margin-top: 8em;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20em;
  margin-top: 8em;
  margin-bottom: 1em;
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 1.2rem;
  }
`;
const MainButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const MainDikkakSignUp = styled(DikkakSignUp)`
  width: 48%;
  margin-top: 1.5em;
`;
const MainDikkakStart = styled(DikkakStart)`
  width: 48%;
  margin-top: 1.5em;
`;
const MainText = styled.div`
  width: 100%;
  height: 3em;
  margin-top: 2.5em;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3em;
  color: #717171;
  border: 2px solid #717171;
`;

// Main Page Component
const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu />
      <JumboCotainer>
        <Jumbotron>
          <BlurBackground>
            <BlurPin />
            <BlurPin />
            <BlurPin />
            <BlurPin />
            <BlurLogo />
            <BlurButtons>
              <DikkakSignUp>⏰ DIKKAK 가입하기</DikkakSignUp>
              <DikkakStart
                onClick={() => {
                  navigate("/login");
                }}
              >
                DIKKAK 시작하기
              </DikkakStart>
            </BlurButtons>
          </BlurBackground>
          <BlurBackground>
            <BlurPin />
            <BlurPin />
            <BlurPin />
            <BlurPin />
            <BlurInfo>
              <div style={{ textAlign: "center" }}>
                <h1>안녕하세요!</h1>
                <h1>"빠르고 쉬운 아웃소싱 플랫폼"</h1>
                <h1>
                  <span>D</span>
                  <span>IKKAK</span> 입니다.
                </h1>
              </div>
              <div style={{ textAlign: "center" }}>
                <p>
                  디깍은 트렌드의 중심 <b>MZ세대 디자이너</b>들이
                </p>
                <p>
                  <b>디자인을 깎는 아웃소싱 플랫폼</b>입니다.
                </p>
              </div>
              <MowImage />
            </BlurInfo>
          </BlurBackground>
        </Jumbotron>
      </JumboCotainer>
      <SectionContainer>
        <NextStep />
        <Section>
          <h3>1. 빠르게 맡기세요</h3>
          <p>
            쉽게 완성되는 외주 제안서 등록을 통해 맞춤형 매칭 서비스를
            경험하세요
          </p>
          <img src={firstImg} alt="firstImg" />
        </Section>
        <NextStep />
        <Section>
          <h3>2. 쉽게 소통하세요</h3>
          <p>아웃소싱에 특화된 커뮤니케이션 UI를 통해 쉽게 소통하세요</p>
          <img src={secondImg} alt="secondImg" />
        </Section>
        <NextStep />
        <Section>
          <h3>3. 쉽게 관리하세요</h3>
          <p>
            외주 작업에 최적화된 UI를 통해 작업/ 파일/ 시간 을 쉽게 관리하세요
          </p>
          <img src={thirdImg} alt="thirdImg" />
        </Section>
        <NextStep />
        <Section>
          <h3>4. 쉽게 쌓으세요</h3>
          <p>찾기도, 도전하기도 힘들었던 디자인 실무경험을 쉽게 쌓으세요</p>
          <img src={fourthImg} alt="fourthImg" />
        </Section>
        <Section>
          <MainText>빠르고-쉬운 디자인 아웃소싱 플랫폼</MainText>
          <MainButtons>
            <MainDikkakSignUp>⏰ DIKKAK 가입하기</MainDikkakSignUp>
            <MainDikkakStart>DIKKAK 시작하기</MainDikkakStart>
          </MainButtons>
        </Section>
      </SectionContainer>
      <Footer bgColor="#EFEFEF" />
    </>
  );
};

export default Main;
