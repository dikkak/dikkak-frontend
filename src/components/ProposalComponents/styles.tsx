import styled from "styled-components";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import earthImg from "../../assets/workspaceImage/earthImg.svg";

export const WorkTitle = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
`;
export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
export const ClientMessage = styled.div`
  position: relative;
  min-height: 15px;
  width: 679px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: left;
  align-items: center;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  font-size: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  white-space: pre-wrap;
  word-break: break-all;
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #905dfb;
    display: block;
    width: 0;
    z-index: 0;
    right: -14px;
    top: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    right: -12px;
    top: 9px;
  }
`;
export const Line = styled.div`
  width: 100%;
  margin: 40px 0;
  padding: 0 32px;
  & > hr {
    border: 0.5px solid #c4c4c4;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(2, 80px);
  grid-gap: 5px;
  margin-left: 21px;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 80px);
  grid-template-rows: repeat(1, 80px);
  grid-gap: 5px;
  margin-left: 21px;
  margin-bottom: 20px;
`;

export const GridChildren = styled.div`
  border: 1px solid #905dfb;
  border-radius: 10px;
  color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export const GridItem = styled(GridChildren)<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? "#fff" : "#C4C4C4")};
  background-color: ${(props) =>
    props.isActive ? props.theme.mainColor : "#fff"};
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

export const EarthImgContainer = styled.div`
  background-color: #c4c4c4;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EarhImg = styled.img.attrs({
  src: earthImg,
})`
  width: 20px;
  height: 18px;
`;

export const EarthImgBox = styled.span`
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const RefLink = styled.button`
  color: ${(props) => props.theme.mainColor};
  border-bottom: 0.5px solid ${(props) => props.theme.mainColor};
  font-size: 10px;
  line-height: 14.48px;
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
`;
