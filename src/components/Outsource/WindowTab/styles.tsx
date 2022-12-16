import styled from "styled-components";
import blurPin from "../../../assets/mainPageImage/blurPin.png";
import rightArrow from "../../../assets/outSource/rightArrow.svg";
import leftArrow from "../../../assets/outSource/leftArrow.svg";

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
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${(props) => (props.isFold ? "6%" : "15%")};
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(30px);
  border-radius: 5px;
  background-color: #fafafa;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.3s;
`;

export const SideTitle = styled.h1`
  position: absolute;
  top: 40px;
  font-size: 28px;
  margin-bottom: 30px;
  color: #717171;
`;
