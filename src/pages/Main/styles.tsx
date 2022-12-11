import styled from "styled-components";
import mainBackgroundImg from "../../assets/mainPageImage/jumbotron.svg";
import mobile_mainBackgroundImg from "../../assets/mainPageImage/m_jumbotron.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import blurLogo from "../../assets/logoImage/blurLogo.svg";
import stepImg from "../../assets/mainPageImage/nextStep.svg";
import mowImg from "../../assets/mainPageImage/mow.svg";
import firstSection1 from "../../assets/mainPageImage/firstSection1.svg";
import firstSection2 from "../../assets/mainPageImage/firstSection2.svg";
import firstSection3 from "../../assets/mainPageImage/firstSection3.svg";
import secondSection1 from "../../assets/mainPageImage/secondSection1.svg";
import secondSection2 from "../../assets/mainPageImage/secondSection2.svg";
import thirdSection1 from "../../assets/mainPageImage/thirdSection1.svg";
import thirdSection2 from "../../assets/mainPageImage/thirdSection2.svg";
import { motion } from "framer-motion";

export const JumboCotainer = styled(motion.div)`
  max-width: 1440px;
  height: 485px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 0 80px;
  overflow-x: hidden;

  @media screen and (max-width: 500px) {
    padding: 0 30px;
    height: auto;
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
    max-width: 450px;
    flex-direction: column;
    height: auto;
    background-image: url(${mobile_mainBackgroundImg});
  }
`;

export const BlurBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 350px;
  height: 85%;
  padding-left: 3em;
  padding-right: 3em;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border: 0.5px solid #eee;
  box-shadow: 5px 5px 15px #ccc;
  &:first-child {
    margin-right: 5rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    &:first-child {
      margin-right: 0;
      margin-bottom: 30px;
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
export const BlurLogo = styled.img.attrs({ src: blurLogo })`
  @media screen and (max-width: 500px) {
    width: 45%;
    margin-top: 30px;
  }
`;
export const BlurInfo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 1.7em;
    span {
      &:first-child {
        color: ${(props) => props.theme.subColor};
        text-decoration: underline;
      }
      &:last-child {
        color: ${(props) => props.theme.mainColor};
        text-decoration: underline;
      }
    }
  }
  p {
    color: #5b5b5b;
    font-size: 0.7rem;
    line-height: 2em;
    b {
      font-weight: 1000;
    }
    &:last-child {
      margin-bottom: 4em;
    }
  }

  @media screen and (max-width: 500px) {
    & > div:first-child {
      margin-top: 30px;
      margin-bottom: 15px;
      & > h1 {
        font-size: 1rem;
      }
    }
  }
`;

export const MowImage = styled.img.attrs({ src: mowImg })`
  position: absolute;
  bottom: 4em;
  right: -5em;

  @media screen and (max-width: 500px) {
    width: 45%;
    bottom: 3.5em;
  }
`;

export const BlurButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;
export const DikkakSignUp = styled.button`
  width: 100%;
  height: 4em;
  margin-top: 5em;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 5px 5px 10px #888;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 15px;
  }
`;
export const DikkakStart = styled(DikkakSignUp)`
  margin-top: 1em;
  background-color: ${(props) => props.theme.subColor};
  @media screen and (max-width: 500px) {
    margin-bottom: 3em;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
  @media screen and (max-width: 500px) {
    padding: 0 30px;
  }
`;

export const NextStep = styled.img.attrs({ src: stepImg })`
  width: 30px;
  margin-top: 8em;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding-top: 5em;
  padding-bottom: 8em;
  padding-left: min(15vw, 5em);
  padding-right: min(15vw, 5em);
  margin-top: 8em;
  margin-bottom: 1em;
  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  h3 {
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => props.theme.textColor};
    & > b {
      color: ${(props) => props.theme.mainColor};
    }
  }
  p {
    margin-top: 1.5em;
    margin-bottom: 2em;
    font-size: 1.2rem;
    color: ${(props) => props.theme.subColor};
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
export const SectionImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40vw;
  height: 25vw;
  max-width: 800px;
  max-height: 500px;
  border-radius: 15px;
  background: linear-gradient(
    55.55deg,
    rgba(243, 243, 243, 0.25) -1.66%,
    rgba(243, 243, 243, 0.0225) 98.34%
  );
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  /* @media screen and (max-width: 500px) {
    width: 100%;
  } */
`;
export const FirstSectionImage1 = styled.img.attrs({ src: firstSection1 })`
  position: absolute;
  height: 80%;
  top: 10%;
  left: -15%;
`;
export const FirstSectionImage2 = styled(motion.img).attrs({
  src: firstSection2,
})`
  width: 80%;
`;
export const FirstSectionImage3 = styled(motion.img).attrs({
  src: firstSection3,
})`
  width: 50%;
  position: absolute;
  bottom: -15%;
  right: -20%;
`;
export const SecondSectionImage1 = styled(motion.img).attrs({
  src: secondSection1,
})`
  width: 80%;
`;
export const SecondSectionImage2 = styled(motion.img).attrs({
  src: secondSection2,
})`
  width: 25%;
  position: absolute;
  top: 19%;
  left: 14%;
`;
export const ThirdSectionImage1 = styled(motion.img).attrs({
  src: thirdSection1,
})`
  width: 80%;
`;
export const ThirdSectionImage2 = styled(motion.img).attrs({
  src: thirdSection2,
})`
  width: 15%;
  position: absolute;
  top: 59%;
  left: 31.8%;
`;
export const MainButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const MainDikkakSignUp = styled(DikkakSignUp)`
  width: 48%;
  margin: 0;
  margin-top: 1.5rem;
`;
export const MainDikkakStart: any = styled(DikkakStart)`
  width: 48%;
  margin: 0;
  margin-top: 1.5rem;
`;
export const MainText = styled.div`
  width: 100%;
  height: 3em;
  margin-top: 2.5em;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3em;
  color: #717171;
  border: 2px solid #717171;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
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

export const ArcadeBox = styled.div`
  position: relative;
  padding-bottom: calc(46.979166666666664% + 40px);
  height: 0;
  width: 90%;
  margin-top: 8em;
`;
export const ArcadeFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
