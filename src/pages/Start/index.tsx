import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import ClientOrDesigner from "../../components/ClientOrDesigner";
import * as S from "./styles";
import { useQuery, useQueryClient } from "react-query";
import { authLogout, userInfo } from "../../apis/auth_login";
import ServiceButton from "../../components/ServiceButton";
import Modal from "../../components/Modal";
import axios from "axios";
import {
  FACEBOOK_AUTH_URL,
  GOOGLE_AUTH_URL,
  KAKAO_AUTH_LOGOUT_URL,
  KAKAO_AUTH_URL,
} from "../../OAuth";
import Admin from "../Admin";
import { setChannelTalkUser } from "../../utils/setChannelTalkService";
import { FaSpinner } from "react-icons/fa";
import { debounce } from "lodash";

const Start = () => {
  const [checkUserLoading, setCheckUserLoading] = useState(false);
  const { data, isLoading } = useQuery("user-info", userInfo);
  const queryClient = useQueryClient();
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const navigate = useNavigate();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const onLogout = () => {
    authLogout().then(() => {
      delete axios.defaults.headers.common["Authorization"];
      queryClient.clear();
      localStorage.removeItem("recoil-persist");
      localStorage.removeItem("token");
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
  const resizeWindow = debounce(() => {
    setInnerWidth(window.innerWidth);
  }, 1000);
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
    data &&
      setChannelTalkUser(
        data.email,
        data.username,
        data.type,
        data.phoneNumber,
        data.marketingMessage,
        data.popUpMessage
      );
  }, [data]);
  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [resizeWindow]);
  if (!data) {
    return <Navigate to="/login" />;
  }
  if (!data.type || !data.username) {
    setCheckUserLoading(true);
    let authURL = getProviderUrl(data.provider);
    if (authURL === "err") return <Navigate to="/login" />;
    console.log(getProviderUrl(data.provider));
    window.location.href = getProviderUrl(data.provider);
    setCheckUserLoading(false);
  }

  if (isLoading || checkUserLoading)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  if (data.type === "ADMIN") {
    return <Admin />;
  }
  return (
    <>
      {isLogoutClicked && (
        <Modal onLogout={onLogout} setIsLogoutClicked={setIsLogoutClicked} />
      )}
      <Menu />
      <S.Container>
        <S.BackButton onClick={() => navigate(-1)}>
          <p>◀︎</p>
          <p>이전으로 돌아가기</p>
        </S.BackButton>
        <S.JumboCotainer>
          <S.Jumbotron>
            <S.BlurBackground>
              <S.BlurPin />
              <S.BlurPin />
              <S.BlurPin />
              <S.BlurPin />
              <S.Title>
                <div>
                  <S.LogoImage />
                  <div>
                    <S.LetterLogo />
                    <p>: 디자인을 깎다</p>
                  </div>
                </div>
              </S.Title>
              <S.Content>
                {data?.type === "UNDEFINED" ? (
                  <>
                    <S.ContentDesc>
                      MZ가 작업하는 빠르고-쉬운 디자인 아웃소싱 플랫폼
                    </S.ContentDesc>
                    <ClientOrDesigner />
                  </>
                ) : (
                  <ServiceButton
                    username={data.username}
                    type={data.type}
                    innerWidth={innerWidth}
                    setIsLogoutClicked={setIsLogoutClicked}
                    onLogout={onLogout}
                  />
                )}
              </S.Content>
            </S.BlurBackground>
            <S.BlurBackground>
              <S.BlurInfo>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                  <h1>✋안녕하세요!</h1>
                  <h1>쉽고 빠른</h1>
                  <h1>디자인 외주 플랫폼</h1>
                  <h1>
                    <span>D</span>
                    <span>IKKAK</span> 입니다.
                  </h1>
                </div>
                <S.MowImage />
              </S.BlurInfo>
            </S.BlurBackground>
          </S.Jumbotron>
        </S.JumboCotainer>
        <Footer bgColor="#fff" />
      </S.Container>
    </>
  );
};

export default Start;
