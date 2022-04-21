import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logoImage/logoBasic.png';
import talkImg from '../assets/menuImage/kakaotalk.png';
import { useRecoilValue } from 'recoil';
import { menuToggleState } from '../atoms/mainPageAtom';

const MenuCotainer = styled.nav<{menuToggle: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 100px;
  padding: 0 30px;
  margin: 0 auto;
  color: ${props => props.menuToggle ? 'black' : 'white'};
  backdrop-filter: ${props => props.menuToggle ? 'blur(5px)' : 'none'};
  background-color: ${props => props.menuToggle ? 'none' : 'rgba(0,0,0,0.5)'};
  box-shadow: ${props => props.menuToggle ? '0px 0px 20px #eee;' : 'none'};
  z-index: 100;
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


const Menu = () => {
  const menuToggle = useRecoilValue(menuToggleState);
  return (
    <MenuCotainer menuToggle={menuToggle} >
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