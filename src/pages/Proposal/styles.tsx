import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  margin-top: 82px;
  height: auto;
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  margin-bottom: 30px;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  line-height: 20px;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`;
export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 0.7em;
  width: 30px;
  height: 30px;
`;
export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
`;
export const BlurBackground = styled.div`
  position: sticky;
  top: 152px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 170px;
  height: 610px;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border-radius: 5px;
  background-color: #fafafa;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));

  &:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  &:nth-child(2) {
    top: 10px;
    right: 10px;
  }

  &:nth-child(3) {
    bottom: 10px;
    left: 10px;
  }
  &:nth-child(4) {
    bottom: 10px;
    right: 10px;
  }
`;
export const SideTitle = styled.h1`
  position: absolute;
  top: 40px;
  font-size: 28px;
  margin-bottom: 30px;
  color: #717171;
`;
export const TimeLine = styled.div`
  width: 55%;
  margin: 50px auto;
  height: 70%;
`;
export const Outer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;
export const TimeStep = styled.h3`
  color: ${(props) => props.theme.mainColor};
  position: relative;
  padding: 0 0 0 20px;
  font-size: 12px;
  border-left: 1px solid ${(props) => props.theme.mainColor};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme.mainColor};
    border: 3px solid ${(props) => props.theme.mainColor};
    border-radius: 999px;
    left: -8.5px;
  }
`;

export const Box = styled.div`
  width: 774px;
  height: 610px;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow-y: scroll;
`;

export const BoxContent = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 25px;
  padding-right: 35px;
  background-color: transparent;
`;

export const SystemMessage = styled.div<{ width: string }>`
  height: 35px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 15px;
  padding-right: 10px;
  &::before {
    content: "";
    position: relative;
    background-color: transparent;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 0px solid transparent;
    border-right: 15px solid ${(props) => props.theme.mainColor};
    left: -10.5px;
  }
`;

export const FileContainer = styled.ul`
  width: 90px;
  & h3 {
    color: ${(props) => props.theme.subColor};
    font-size: 14px;
    line-height: 1.08rem;
    padding: 0 0 0 20px;
    position: relative;
    font-family: "Inter";
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${(props) => props.theme.mainColor};
      border: 3px solid ${(props) => props.theme.mainColor};
      border-radius: 999px;
      left: -7.5px;
      top: 6px;
    }
  }
  & li {
    border-left: 1px solid #c4c4c4;
    color: #c4c4c4;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 12.5px;
    padding: 22px 0 0 18px;
    position: relative;
    top: -12px;
    max-width: 83px;
    max-height: 42px;

    &::before {
      content: "";
      position: absolute;
      width: 6.5px;
      height: 6.5px;
      background: #329a29;
      border-radius: 999px;
      left: -3.5px;
      top: 82.5%;
    }
  }
`;

export const WorkTitle = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
`;

export const EtcFileContainer = styled(FileContainer)`
  margin-top: 18px;
`;

export const Line = styled.div`
  width: 100%;
  margin: 40px 0;
  padding: 0 32px;
  & > hr {
    border: 0.5px solid #c4c4c4;
  }
`;
