import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import mainBackgroundImg from '../assets/mainPageImage/mainBackground.png';
import blurBackgroundImg from '../assets/mainPageImage/blurBack.png';
import blurPin from '../assets/mainPageImage/blurPin.png';
import blurLogo from '../assets/logoImage/blurLogo.png';
import logoImg from '../assets/logoImage/logoBasic.png';
import firstImg from '../assets/mainPageImage/firstImage.png';
import { useSetRecoilState } from 'recoil';
import { menuToggleState } from '../atoms/mainPageAtom';

// Components style code
const Container = styled.div`
  max-width: 1440px;
  height: 500vh;
  margin: 0 auto;
  overflow-x: hidden;
`;
const Jumbotron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  height: 772px;
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
  /* width: 976px; */
  width: 70vw;
  height: 487px;
  top: 25px;
  padding-left: 5em;
  padding-right: 5em;
  background-image: url(${blurBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 1440px){
    width: 976px;
  }
  @media screen and (max-width: 768px){
    font-size: 1rem;
    height: 400px;
  }
  @media screen and (max-width: 576px){
    font-size: .5rem;
    height: 350px;
  }
`;

const BlurPin = styled.img.attrs({src: blurPin})`
  position: absolute;
  &:nth-child(1) {
    top: 30px;
    left: 30px;
  }
  &:nth-child(2) {
    top: 30px;
    right: 30px;
  }
  &:nth-child(3) {
    bottom: 30px;
    left: 30px;
  }
  &:nth-child(4) {
    bottom: 30px;
    right: 30px;
  }
  @media screen and (max-width: 768px){
    width: 20px;
  }
`;
const BlurLogo = styled.img.attrs({src: blurLogo})`
  @media screen and (max-width: 768px){
    width: 150px;
  }
  @media screen and (max-width: 576px){
    width: 120px;
  }
`;
const BlurText = styled.div`
  width: 100%;
  height: 3em;
  margin-top: 2.5em;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3em;
  color: white;
  border: 2px solid white;
  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
  @media screen and (max-width: 576px){
    font-size: .8rem;
  }
`;
const BlurButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const DikkakSignUp = styled.button`
  width: 48%;
  height: 3em;
  margin-top: 2rem;
  font-size: 1.3rem;
  background-color: ${props => props.theme.mainColor};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 5px 10px 20px #333;
  @media screen and (max-width: 768px){
    font-size: 1.2rem;
  }
  @media screen and (max-width: 576px){
    font-size: .8rem;
  }
`;
const DikkakStart = styled(DikkakSignUp)`
  background-color: ${props => props.theme.subColor};
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  margin-top: 20em;
  h1 {
    font-size: 4rem;
    font-weight: 900;
    span {
      &:first-child {
        color: ${props => props.theme.subColor};
      }
      &:last-child {
        color: ${props => props.theme.mainColor};
      }
    }
  }
  p {
    font-size: 2rem;
    line-height: 1.5em;
    &:nth-child(2) {
      margin-top: 2em;
    }
    b {
      font-weight: 900;
    }
  }
  img {
    margin-top: 2em;
    width: 50px;
  }
`;
const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20em;
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

// Main Page Component
const Main = () => {
  const jumbotronRef = useRef<HTMLImageElement>(null);
  const setMenuToggleState = useSetRecoilState(menuToggleState); 
  const scrollEvent = (e: Event) => { // 스크롤이 점보트론 높이만큼 되었다면 menuToggleState를 true로 설정, 아니면 false
      const jumbotronBound = jumbotronRef.current?.getBoundingClientRect();
      if(jumbotronBound!.top<-680) {
        setMenuToggleState(true);
      } else {
        setMenuToggleState(false);
      }
    }
  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    }
  });
  return (
    <Container>
      <Menu/>
      <Jumbotron ref={jumbotronRef}>
        <BlurBackground>
          <BlurPin/>
          <BlurPin/>
          <BlurPin/>
          <BlurPin/>
          <BlurLogo/>
          <BlurText>빠르고-쉬운 디자인 아웃소싱 플랫폼</BlurText>
          <BlurButtons>
            <DikkakSignUp>
              ⏰ DIKKAK 가입하기
            </DikkakSignUp>
            <DikkakStart>
              DIKKAK 시작하기
            </DikkakStart>
          </BlurButtons>
        </BlurBackground>
      </Jumbotron>
      <Intro>
        <h1>안녕하세요 <span>D</span><span>IKKAK</span> 입니다.</h1>
        <p>디깍은 트랜드의 중심 <b>MZ세대 학생 디자이너</b>들이</p>
        <p><b>디자인을 깎는 아웃소싱 플랫폼</b>입니다.</p>
        <img src={logoImg} alt="logoImg" />
      </Intro>
      <First>
        <h3>1. 빠르게 맡기세요</h3>
        <p>쉽게 완성되는 외주 제안서 등록을 통해 맞춤형 매칭 서비스를 경험하세요</p>
        <img src={firstImg} alt="firstImg" />
      </First>
    </Container>
  );
};

export default Main;