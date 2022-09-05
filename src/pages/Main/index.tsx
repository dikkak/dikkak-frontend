import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import { userInfo } from "../../apis/auth_login";
import { useQuery } from "react-query";
import * as S from "./styles";
import { FaSpinner } from "react-icons/fa";
import ChannelService from "../../utils/channelTalk";

const Main = () => {
  const { data, isFetching } = useQuery("user-info", userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    ChannelService.shutdown();
    ChannelService.boot({
      pluginKey: process.env.REACT_APP_CHANNELTALK_PLUGIN_KEY,
    });
  }, []);
  if (isFetching)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  if (data) {
    return <Navigate to="/service_start" />;
  }
  return (
    <>
      <Menu />
      <S.JumboCotainer>
        <S.Jumbotron>
          <S.BlurBackground>
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurLogo />
            <S.BlurButtons>
              <S.DikkakSignUp
                onClick={() => {
                  navigate("/signup");
                }}
              >
                ⏰ DIKKAK 가입하기
              </S.DikkakSignUp>
              <S.DikkakStart
                onClick={() => {
                  navigate("/login");
                }}
              >
                DIKKAK 시작하기
              </S.DikkakStart>
            </S.BlurButtons>
          </S.BlurBackground>
          <S.BlurBackground>
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurPin />
            <S.BlurInfo>
              <div style={{ textAlign: "center" }}>
                <h1>안녕하세요!</h1>
                <h1>"빠르고 쉬운 아웃소싱 플랫폼"</h1>
                <h1>
                  <span>D</span>
                  <span>IKKAK</span> 입니다.
                </h1>
              </div>
              <div style={{ textAlign: "center" }}>
                <p>
                  디깍은 트렌드의 중심 <b>MZ세대 디자이너</b>들이
                </p>
                <p>
                  <b>디자인을 깎는 아웃소싱 플랫폼</b>입니다.
                </p>
              </div>
              <S.MowImage />
            </S.BlurInfo>
          </S.BlurBackground>
        </S.Jumbotron>
      </S.JumboCotainer>
      <S.SectionContainer>
        <S.NextStep />
        <S.Section>
          <h3>1. 빠르게 맡기세요</h3>
          <p>
            쉽게 완성되는 외주 제안서 등록을 통해 맞춤형 매칭 서비스를
            경험하세요
          </p>
          <S.SectionFirstImage />
        </S.Section>
        <S.NextStep />
        <S.Section>
          <h3>2. 쉽게 소통하세요</h3>
          <p>아웃소싱에 특화된 커뮤니케이션 UI를 통해 쉽게 소통하세요</p>
          <S.SectionSecondImage />
        </S.Section>
        <S.NextStep />
        <S.Section>
          <h3>3. 쉽게 관리하세요</h3>
          <p>
            외주 작업에 최적화된 UI를 통해 작업/ 파일/ 시간 을 쉽게 관리하세요
          </p>
          <S.SectionThirdImage />
        </S.Section>
        <S.NextStep />
        <S.Section>
          <h3>4. 쉽게 쌓으세요</h3>
          <p>찾기도, 도전하기도 힘들었던 디자인 실무경험을 쉽게 쌓으세요</p>
          <S.SectionFourthImage />
        </S.Section>
        <S.Section>
          <S.MainText>빠르고-쉬운 디자인 아웃소싱 플랫폼</S.MainText>
          <S.MainButtons>
            <S.MainDikkakSignUp onClick={() => navigate("/signup")}>
              ⏰ DIKKAK 가입하기
            </S.MainDikkakSignUp>
            <S.MainDikkakStart onClick={() => navigate("/login")}>
              DIKKAK 시작하기
            </S.MainDikkakStart>
          </S.MainButtons>
        </S.Section>
      </S.SectionContainer>
      <Footer bgColor="#EFEFEF" />
    </>
  );
};

export default Main;
