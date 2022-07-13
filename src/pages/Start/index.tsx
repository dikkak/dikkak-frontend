import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ClientOrDesigner from "../../components/ClientOrDesigner";
import { BackButton, BlurBackground, BlurPin, Container, Content, ContentDesc, JumboCotainer, Jumbotron, LetterLogo, LogoImage, PaintLogo, Title } from './styles';
import { useQuery, useQueryClient } from 'react-query';
import {authLogout, userInfo} from '../../apis/auth_login';
import ServiceButton from '../../components/ServiceButton';
import LogoutModal from '../../components/LogoutModal';
import axios from 'axios';
import { KAKAO_AUTH_LOGOUT_URL } from '../../OAuth';


const Start = () => {
  const {data} = useQuery('user-info', userInfo);
  const queryClient = useQueryClient();
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const navigate = useNavigate();
  const onLogout = () => {
    authLogout()
    .then(() => {
      delete axios.defaults.headers.common['Authorization'];
      queryClient.clear();
      localStorage.removeItem('recoil-persist');
      window.location.href=KAKAO_AUTH_LOGOUT_URL;
    });
  };
  if(!data) {return <Navigate to='/login'/>};
  return (
    <>
      {
        isLogoutClicked && (
          <LogoutModal onLogout={onLogout} setIsLogoutClicked={setIsLogoutClicked}/>
        )
      }
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
                {
                  data?.type ==="UNDEFINED" ? (
                    <>
                      <ContentDesc>
                        MZ가 작업하는 빠르고-쉬운 디자인 아웃소싱 플랫폼
                      </ContentDesc>
                      <ClientOrDesigner></ClientOrDesigner>
                    </>
                  ) : (
                    <>
                      <ContentDesc>
                        {data?.username} {data?.type}님 안녕하세요!
                      </ContentDesc>
                      <ServiceButton 
                        username={data.username} 
                        type={data.type} 
                        setIsLogoutClicked={setIsLogoutClicked}
                        onLogout={onLogout}/>
                    </>
                )
              }
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