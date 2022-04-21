import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import mainBackgroundImg from '../assets/mainBackground.png';
import blurBackgroundImg from '../assets/blurBack.png';
import blurPin from '../assets/blurPin.png';
import blurLogo from '../assets/blurLogo.png';
import { useSetRecoilState } from 'recoil';
import { menuToggleState } from '../atoms/mainPageAtom';

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
  font-size: 1.5rem;
  border: 2px solid white;
  color: white;
  width: 100%;
  margin-top: 2.5em;
  height: 3em;
  line-height: 3em;
  text-align: center;
  @media screen and (max-width: 768px){
    font-size: 1rem;
  }
  @media screen and (max-width: 576px){
    font-size: .5rem;
  }
`;
const BlurButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const DikkakSignUp = styled.button`
  font-size: 1.3rem;
  width: 48%;
  background-color: ${props => props.theme.mainColor};
  height: 3em;
  border: none;
  outline: none;
  color: white;
  margin-top: 1rem;
  box-shadow: 5px 10px 20px #333;
  cursor: pointer;
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

const Main = () => {
  const jumbotronRef = useRef<HTMLImageElement>(null);
  const setMenuToggleState = useSetRecoilState(menuToggleState);
  const scrollEvent = (e: Event) => {
      const backgroundBound = jumbotronRef.current?.getBoundingClientRect();
      if(backgroundBound!.top<-680) {
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
    </Container>
  );
};

export default Main;