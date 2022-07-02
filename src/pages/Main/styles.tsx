import styled from "styled-components";
import mainBackgroundImg from "../../assets/mainPageImage/jumbotron.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import blurLogo from "../../assets/logoImage/blurLogo.svg";
import stepImg from "../../assets/mainPageImage/nextStep.svg";
import mowImg from "../../assets/mainPageImage/mow.svg";

export const JumboCotainer = styled.div`
  max-width: 1440px;
  height: 485px;
  margin: 0 auto;
  margin-top: 150px;
  padding: 0 80px;
  overflow-x: hidden;
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
export const BlurLogo = styled.img.attrs({ src: blurLogo })``;
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
`;

export const MowImage = styled.img.attrs({ src: mowImg })`
  position: absolute;
  bottom: 4em;
  right: -5em;
`;

export const BlurButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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
`;
export const DikkakStart = styled(DikkakSignUp)`
  margin-top: 1em;
  background-color: ${(props) => props.theme.subColor};
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  overflow-x: hidden;
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
  width: 100%;
  padding: 0 20em;
  margin-top: 8em;
  margin-bottom: 1em;
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 1.2rem;
  }
`;
export const MainButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const MainDikkakSignUp = styled(DikkakSignUp)`
  width: 48%;
  margin-top: 1.5em;
`;
export const MainDikkakStart: any = styled(DikkakStart)`
  width: 48%;
  margin-top: 1.5em;
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
`;