import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ClientOrDesigner from "../../components/ClientOrDesigner";
import {
  BackButton,
  BlurBackground,
  BlurPin,
  Container,
  Content,
  ContentDesc,
  JumboCotainer,
  Jumbotron,
  LetterLogo,
  LogoImage,
  PaintLogo,
  Title,
} from "./styles";
import { useQuery, useQueryClient } from "react-query";
import { authLogout, userInfo } from "../../apis/auth_login";
import ServiceButton from "../../components/ServiceButton";
import LogoutModal from "../../components/LogoutModal";
import axios from "axios";
import {
  FACEBOOK_AUTH_URL,
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_LOGOUT_URL,
  KAKAO_AUTH_URL,
} from "../../OAuth";
import Admin from "../Admin";
import { setChannelTalkUser } from "../../utils/setChannelTalkService";

const Start = () => {
  const [checkUserLoading, setCheckUserLoading] = useState(false);
  const { data, isLoading } = useQuery("user-info", userInfo);
  const queryClient = useQueryClient();
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    authLogout().then(() => {
      delete axios.defaults.headers.common["Authorization"];
      queryClient.clear();
      localStorage.removeItem("recoil-persist");

      switch (data?.provider) {
        case "KAKAO":
          return (window.location.href = KAKAO_AUTH_LOGOUT_URL);
        case "GOOGLE":
          return navigate("/");
        case "FACEBOOK":
          return navigate("/");
      }
    });
  };

  const getProviderUrl = (provider: string) => {
    switch (provider) {
      case "KAKAO":
        return KAKAO_AUTH_URL;
      case "GOOGLE":
        return GOOGLE_AUTH_URL;
      case "FACEBOOK":
        return FACEBOOK_AUTH_URL;
      default:
        return "err";
    }
  };

  useEffect(() => {
    data && setChannelTalkUser(data.email, data.username, data.type, );
  }, [data]);

  if (!data) {
    return <Navigate to="/login" />;
  }
  if (!data.type || !data.username) {
    setCheckUserLoading(true);
    let authURL = getProviderUrl(data.provider);
    if (authURL === "err") return <Navigate to="/login" />;
    window.location.href = getProviderUrl(data.provider);
    setCheckUserLoading(false);
  }

  if (isLoading || checkUserLoading) <div>Loading...</div>;
  if (data.type === "ADMIN") {
    return <Admin />;
  }
  return (
    <>
      {isLogoutClicked && (
        <LogoutModal
          onLogout={onLogout}
          setIsLogoutClicked={setIsLogoutClicked}
        />
      )}
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
                {data?.type === "UNDEFINED" ? (
                  <>
                    <ContentDesc>
                      MZ가 작업하는 빠르고-쉬운 디자인 아웃소싱 플랫폼
                    </ContentDesc>
                    <ClientOrDesigner></ClientOrDesigner>
                  </>
                ) : (
                  <>
                    <ContentDesc>
                      {data?.username}{" "}
                      {data?.type === "CLIENT" ? "클라이언트" : "디자이너"}님
                      안녕하세요!
                    </ContentDesc>
                    <ServiceButton
                      username={data.username}
                      type={data.type}
                      setIsLogoutClicked={setIsLogoutClicked}
                      onLogout={onLogout}
                    />
                  </>
                )}
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
