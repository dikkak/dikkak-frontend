import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ClientOrDesigner from "../../components/ClientOrDesigner";
import { BackButton, BlurBackground, BlurPin, Container, Content, ContentDesc, JumboCotainer, Jumbotron, LetterLogo, LogoImage, PaintLogo, Title } from './styles';

const Start = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu />
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          <p>◀︎</p>
          <p>이전으로 돌아가기</p>
        </BackButton>
        <JumboCotainer>
          <Jumbotron>
            <BlurBackground>
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <Title>
                <div>
                  <LogoImage></LogoImage>
                  <div>
                    <LetterLogo></LetterLogo>
                    <p>: 디자인을 깎다</p>
                  </div>
                  <PaintLogo></PaintLogo>
                </div>
              </Title>
              <Content>
                <ContentDesc>
                  MZ가 작업하는 빠르고-쉬운 디자인 아웃소싱 플랫폼
                </ContentDesc>
                <ClientOrDesigner></ClientOrDesigner>
              </Content>
            </BlurBackground>
          </Jumbotron>
        </JumboCotainer>
        <Footer bgColor="#fff" />
      </Container>
    </>
  );
};

export default Start;