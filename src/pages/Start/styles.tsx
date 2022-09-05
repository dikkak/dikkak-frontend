import styled from "styled-components";
import mainBackgroundImg from "../../assets/mainPageImage/jumbotron.svg";
import mobile_mainBackgroundImg from "../../assets/mainPageImage/m_jumbotron.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import logoImg from "../../assets/logoImage/logoBasic.svg";
import letterLogo from "../../assets/logoImage/letterLogo.svg";
import paintLogo from "../../assets/logoImage/pencilPaint.png";

export const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

export const JumboCotainer = styled.div`
  width: 100%;
  height: 490px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 0 80px;
  overflow-x: hidden;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const Jumbotron = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1116px;
  height: 100%;
  margin: 0 auto;
  background-image: url(${mainBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    background-image: url(${mobile_mainBackgroundImg});
    background-position: center center;
  }
`;

export const BlurBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  max-width: 827px;
  height: 80%;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border: 0.5px solid #eee;
  box-shadow: 5px 5px 15px #ccc;

  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 450px;
  }
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50px;
  top: 60px;

  font-family: "Noto Sans KR";
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      p {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        line-height: 16px;
        letter-spacing: 2px;
        margin-top: 7px;
        color: #717171;
        font-family: "Noto Sans KR";
      }
    }
  }
  @media screen and (max-width: 500px) {
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        p {
          font-size: 11px;
          font-weight: 400;
          text-align: center;
          line-height: 11px;
          letter-spacing: 2px;
          margin-top: 7px;
          color: #717171;
          font-family: "Noto Sans KR";
        }
      }
    }
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: -50px;
  left: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    color: white;
  }
  @media screen and (max-width: 500px) {
    left: 10%;
    width: 120px;
    p {
      font-size: 0.5rem;
    }
  }
`;

export const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  &:nth-child(1) {
    top: 20px;
    left: 20px;
  }
  &:nth-child(2) {
    top: 20px;
    right: 20px;
  }
  &:nth-child(3) {
    bottom: 20px;
    left: 20px;
  }
  &:nth-child(4) {
    bottom: 20px;
    right: 20px;
  }
`;

// logos
export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 52px;
  margin-right: 6px;
  height: 52px;
  @media screen and (max-width: 500px) {
    width: 38px;
    height: 38px;
  }
`;

export const LetterLogo = styled.img.attrs({ src: letterLogo })`
  height: 22px;
  width: auto;
  @media screen and (max-width: 500px) {
    height: 17px;
  }
`;

export const PaintLogo = styled.img.attrs({ src: paintLogo })`
  position: absolute;
  right: 15%;
  margin-left: 5px;
  width: 140px;
  height: 90px;
  @media screen and (max-width: 500px) {
    top: 10px;
    right: 3%;
    width: 100px;
    height: 50px;
  }
`;

// content
export const Content = styled.div`
  position: relative;
  top: -110px;
  width: 100%;
  padding: 0 10%;
  height: auto;
`;

export const ContentDesc = styled.p`
  border: 2px solid ${(props) => props.theme.subColor};
  width: 100%;
  font-weight: 500;
  font-family: "Noto Sans KR";
  font-size: 0.95rem;
  color: #717171;
  line-height: 29px;
  padding: 6px 0;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
