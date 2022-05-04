import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logoImage/logoBasic.png';
import talkImg from '../assets/menuImage/kakaotalk.svg';

const Container = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(5px);
  color: black;
  box-shadow: 0px 2px 5px #eee;
  z-index: 100;
`;
const MenuCotainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 50px;
  padding: 0 80px;
  margin: 0 auto;
`;
const Title = styled.div`
  display: flex;
  width: 150px;
`;
const LogoImage = styled.img.attrs({src: logoImg})`
  width: 30px;
  height: 30px;
  margin-right: .3em;
`;
const LogoTitle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const LogoName = styled.p`
margin-bottom: 0.2em;
  font-size: 15px;
  font-weight: 100;
  color: #717171;
`;
const LogoSubName = styled.p`
  font-size: 10px;
  color: #717171;
`;
const Talk = styled.img.attrs({src: talkImg})`
  width: 80px;
`;


const Menu = () => {
  return (
    <Container>
      <MenuCotainer >
        <Title>
          <LogoImage/>
          <LogoTitle>
            <LogoName>DIKKAK</LogoName>
            <LogoSubName>: 디자인을 깎다</LogoSubName>
          </LogoTitle>
        </Title>
        <Talk/>
      </MenuCotainer>
    </Container>
    
  );
};

export default Menu;