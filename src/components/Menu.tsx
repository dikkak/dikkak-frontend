import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logoBasic.png';
import talkImg from '../assets/kakaotalk.png';

const MenuCotainer = styled.nav<{isBackgroundEnd: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 80px;
  padding: 0 30px;
  margin: 0 auto;
  color: ${props => props.isBackgroundEnd ? 'black' : 'white'};
  backdrop-filter: ${props => props.isBackgroundEnd ? 'blur(5px)' : 'none'};
  background-color: ${props => props.isBackgroundEnd ? 'none' : 'rgba(0,0,0,0.5)'};
  box-shadow: ${props => props.isBackgroundEnd ? '0px 0px 20px #eee;' : 'none'};
`;
const Title = styled.div`
  display: flex;
  width: 100px;
`;
const LogoImage = styled.img.attrs({src: logoImg})`
  width: 40px;
  margin-right: .5em;
`;
const LogoTitle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const LogoName = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
`;
const LogoSubName = styled.p`
  font-size: 0.3rem;
  color: #bbb;
`;
const Talk = styled.img.attrs({src: talkImg})`
`;

interface IMenu {
  isBackgroundEnd: boolean;
}

const Menu = ({isBackgroundEnd}: IMenu) => {
  return (
    <MenuCotainer isBackgroundEnd={isBackgroundEnd} >
      <Title>
        <LogoImage/>
        <LogoTitle>
          <LogoName>DIKKAK</LogoName>
          <LogoSubName>: 디자인을 깎다</LogoSubName>
        </LogoTitle>
      </Title>
      <Talk>
      </Talk>
    </MenuCotainer>
  );
};

export default Menu;