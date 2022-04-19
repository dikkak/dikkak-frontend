import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import mainBackgroundImg from '../assets/mainBackground.png';

const Container = styled.div`
  max-width: 1440px;
  height: 500vh;
  margin: 0 auto;
  overflow-x: hidden;
`;
const TestImg = styled.img.attrs({src: mainBackgroundImg})`
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = () => {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const [isBackgroundEnd, setIsBackgroundEnd] = useState<boolean>(false);
  const scrollEvent = () => {
    window.addEventListener('scroll', (e: Event) => {
      const backgroundBound = backgroundRef.current?.getBoundingClientRect();
      if(backgroundBound!.top<-730) {
        setIsBackgroundEnd(true);
      } else {
        setIsBackgroundEnd(false);
      }
    })
  }
  useEffect(() => {
    scrollEvent();
    return scrollEvent();
  })
  return (
    <Container>
      <Menu isBackgroundEnd={isBackgroundEnd}/>
      <TestImg ref={backgroundRef}/>
    </Container>
  );
};

export default Main;