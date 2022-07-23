import styled from "styled-components";
import questionBox from "../../../assets/workspaceImage/questionBox.png";

export const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
  padding: 13px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
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
  margin-bottom: 10px;
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
export const ModelingDesc = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 10px;
`;
export const QuestionBox = styled.img.attrs({ src: questionBox })`
  width: 30px;
  height: 30px;
`;
export const DescList = styled.ul`
  transform: translateX(20px);
  color: ${(props) => props.theme.mainColor};
  font-size: 10px;
  list-style: disc;
  font-weight: 900;
  & > li {
    line-height: 15px;
  }
`;
export const Grid = styled.div`
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

export const NextStepButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
  height: 30px;
  background-color: #717171;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
