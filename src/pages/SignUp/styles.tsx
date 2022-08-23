import styled from "styled-components";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import logoImg from "../../assets/logoImage/logoBasic.svg";

interface ButtonColorProps {
  bgColor: string;
  textColor: string;
}

interface ImgUrlProps {
  url: string;
}

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
`;

export const Board = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 487px;
  padding: 40px 0;
  background-color: rgba(219, 219, 219, 0.15);
  border: 1px solid #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  top: 107px;
`;

export const BackButton = styled.div`
  position: relative;
  top: 20px;
  left: 0;
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
`;

export const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  &:first-child {
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

export const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  top: 52px;
  font-family: "Noto Sans KR";
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 30px;
    }
  }
  & p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
    padding: 8px 0;
    color: #717171;
    font-family: "Noto Sans KR";
  }
`;

export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 30px;
  height: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 220px;
  width: 100%;
  margin-bottom: 37px;
`;

export const Button = styled.button<ButtonColorProps>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  width: 373px;
  font-size: 15px;
  height: 38px;
  border: 0;
  margin-bottom: 10px;
  padding: 7px 0px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter";
  font-weight: 700;
`;

export const BrandLogo = styled.img.attrs((props: ImgUrlProps) => ({
  src: props.url,
}))<ImgUrlProps>`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  border: 0;
`;
