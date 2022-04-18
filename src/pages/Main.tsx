import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import mainBackgroundImg from '../assets/mainBackground.png';

const Container = styled.div`
  max-width: 1440px;
  height: 500vh;
  margin: 0 auto;
`;
const TestImg = styled.img.attrs({src: mainBackgroundImg})`
  background-repeat: no-repeat;
  background-size: cover;
`;


const Main = () => {
  return (
    <Container>
      <Menu/>
      <TestImg/>
    </Container>
  );
};

export default Main;