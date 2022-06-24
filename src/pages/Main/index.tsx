import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import firstImg from "../../assets/mainPageImage/firstImage.png";
import secondImg from "../../assets/mainPageImage/secondImage.png";
import thirdImg from "../../assets/mainPageImage/thirdImage.png";
import fourthImg from "../../assets/mainPageImage/fourthImage.png";
import { BlurBackground, BlurButtons, BlurInfo, BlurLogo, BlurPin, DikkakSignUp, DikkakStart, JumboCotainer, Jumbotron, MainButtons, MainDikkakSignUp, MainDikkakStart, MainText, MowImage, NextStep, Section, SectionContainer } from './styles'
import { useSetRecoilState } from "recoil";
import { approved_code } from "../../atoms";

const Main = () => {
  const navigate = useNavigate();
  const href = window.location.href;
  let params = new URL(document.location.toString()).searchParams;
  let code = params.get("code"); // 인가코드 받는 부분
  const codeHandler = useSetRecoilState(approved_code);
  useEffect(() => {}, []);
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
              <DikkakSignUp
                onClick={() => {
                  navigate("/signup");
                }} 
              >
                  ⏰ DIKKAK 가입하기</DikkakSignUp>
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