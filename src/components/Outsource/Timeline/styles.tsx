import styled from "styled-components";
import blurPin from "../../../assets/mainPageImage/blurPin.png";
import rightArrow from "../../../assets/outSource/rightArrow.svg";
import leftArrow from "../../../assets/outSource/leftArrow.svg";

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
export const RightArrow = styled.img.attrs({ src: rightArrow })`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5px;
  right: 10px;
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
  right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
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
  width: 35%;
  margin: 50px auto;
  height: 70%;
`;
export const Outer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
`;
export const TimeStep = styled.h3`
  color: #717171;
  position: relative;
  padding: 0 0 0 20px;
  font-size: 15px;
  border-left: 1px solid #c4c4c4;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #c4c4c4;
    border: 3px solid #c4c4c4;
    border-radius: 999px;
    left: -8.5px;
  }
`;
