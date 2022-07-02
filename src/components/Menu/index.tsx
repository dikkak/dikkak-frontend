import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, LogoImage, LogoName, LogoSubName, LogoTitle, MenuCotainer, Talk, Title } from './styles';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MenuCotainer >
        <Title onClick={() => {navigate('/')}}>
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