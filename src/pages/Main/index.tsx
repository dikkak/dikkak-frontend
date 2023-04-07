import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import { userInfo } from "../../apis/auth_login";
import { useQuery } from "react-query";
import * as S from "./styles";
import { FaSpinner } from "react-icons/fa";
import ChannelService from "../../utils/channelTalk";
import { opacityVariants } from "../../utils/variants";

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
      <S.JumboCotainer
        variants={opacityVariants}
        initial="initial"
        animate="mount"
      >
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
        <S.Section style={{ position: "relative", paddingTop: "5em" }}>
          <S.BlurPin />
          <S.BlurPin />
          <S.BlurPin />
          <S.BlurPin />
          <S.ZeroSectionImage1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1.2, delay: 0.2 },
            }}
          />
          <S.ZeroSectionImage2 />
        </S.Section>
        <S.NextStep />
        <S.Section>
          <h3>
            쉽고, 빠르게 <b>맡기세요</b>
          </h3>
          <p>#간편 #외주제안서 #맞춤형 #매칭서비스 #성공경험 #기회비용절감</p>
          <S.SectionImageBox>
            <S.FirstSectionImage1 />
            <S.FirstSectionImage2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1.2, delay: 0.2 },
              }}
            />
            <S.FirstSectionImage3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1.2, delay: 0.8 },
              }}
            />
          </S.SectionImageBox>
        </S.Section>
        <S.NextStep />
        <S.Section>
          <h3>
            쉽고, 빠르게 <b>소통하세요</b>
          </h3>
          <p>
            #쉬운소통 #디자인 #아웃소싱 #특화 #커뮤니케이션서비스 #우리가
            #알려줄게요
          </p>
          <S.SectionImageBox>
            <S.SecondSectionImage1 />
            <S.SecondSectionImage2
              initial={{ left: "35%" }}
              whileInView={{
                left: "14%",
                transition: { duration: 0.5, delay: 0.3 },
              }}
            />
          </S.SectionImageBox>
        </S.Section>
        <S.NextStep />
        <S.Section>
          <h3>
            쉽고, 빠르게 <b>관리하세요</b>
          </h3>
          <p>
            #디자인 #아웃소싱 #최적화 #채팅시스템 #효율적 #작업/파일/시간 #관리
          </p>
          <S.SectionImageBox>
            <S.ThirdSectionImage1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
            />
            <S.ThirdSectionImage2
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.8, delay: 0.5 },
              }}
            />
          </S.SectionImageBox>
        </S.Section>
        <S.NextStep />
        <S.ArcadeBox>
          <S.ArcadeFrame
            title="1"
            src="https://demo.arcade.software/7FwITGQAUv3CRIld2m9U?embed"
            frameBorder="0"
            loading="lazy"
            allowFullScreen
          ></S.ArcadeFrame>
        </S.ArcadeBox>
        <S.NextStep />
        <S.BottomMain>
          <S.MainText>빠르고-쉬운 디자인 아웃소싱 플랫폼</S.MainText>
          <S.MainButtons>
            <S.MainDikkakSignUp onClick={() => navigate("/signup")}>
              ⏰ DIKKAK 가입하기
            </S.MainDikkakSignUp>
            <S.MainDikkakStart onClick={() => navigate("/login")}>
              DIKKAK 시작하기
            </S.MainDikkakStart>
          </S.MainButtons>
        </S.BottomMain>
      </S.SectionContainer>
      <Footer bgColor="#EFEFEF" />
    </>
  );
};

export default Main;
