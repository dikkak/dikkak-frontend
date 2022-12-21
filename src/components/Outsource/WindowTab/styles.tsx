import styled from "styled-components";
import blurPin from "../../../assets/mainPageImage/blurPin.png";
import rightArrow from "../../../assets/outSource/rightArrow.svg";
import leftArrow from "../../../assets/outSource/leftArrow.svg";
import chatLogo from "../../../assets/outSource/chatLogo.svg";
import todoLogo from "../../../assets/outSource/todoLogo.svg";
import fileLogo from "../../../assets/outSource/fileLogo.svg";
import chatLogoOff from "../../../assets/outSource/chatLogoOff.svg";
import todoLogoOff from "../../../assets/outSource/todoLogoOff.svg";
import fileLogoOff from "../../../assets/outSource/fileLogoOff.svg";
import { motion } from "framer-motion";

export const RightArrow = styled.img.attrs({ src: rightArrow })`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5px;
  left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const LeftArrow = styled.img.attrs({ src: leftArrow })`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5px;
  left: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
  &:nth-child(2) {
    top: 10px;
    right: 5px;
  }

  &:nth-child(3) {
    bottom: 10px;
    left: 5px;
  }
  &:nth-child(4) {
    bottom: 10px;
    right: 5px;
  }
`;

export const BlurBackground = styled.div<{ isFold: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: ${(props) => (props.isFold ? "6%" : "15%")};
  height: 100%;
  padding-top: 40px;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border-radius: 5px;
  background-color: #fafafa;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.3s;
`;

export const LogoBox = styled(motion.div)<{ ischecked: boolean | number }>`
  width: 45px;
  height: 45px;
  background-color: ${(props) =>
    props.ischecked ? props.theme.mainColor : "white"};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: ${(props) =>
    props.ischecked
      ? "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"
      : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const SideTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  color: #717171;
`;

export const ChatLogo = styled.div<{ ischecked: boolean }>`
  width: 35px;
  height: 35px;
  background-image: url(${(props) => props.ischecked ? chatLogo : chatLogoOff});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
export const TodoLogo = styled(ChatLogo)`
  background-image: url(${(props) => props.ischecked ? todoLogo : todoLogoOff});
`;
export const FileLogo = styled(ChatLogo)`
  background-image: url(${(props) => props.ischecked ? fileLogo : fileLogoOff});
`;
export const LogoText = styled.p<{ ischecked: boolean }>`
  color: ${(props) => (props.ischecked ? "white" : props.theme.mainColor)};
`;

export const ExitButton = styled.button`
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 90px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  & > p {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const Bar = styled.div`
  width: 5px;
  height: 100%;
  border-radius: 5px;
  background-color: #d9d9d9;
`;
