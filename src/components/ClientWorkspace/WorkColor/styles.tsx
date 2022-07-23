import styled from "styled-components";

export const MessageBox = styled.ul`
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
  overflow-y: scroll;
  padding: 13px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
`;

export const SystemMessage = styled.p`
  height: 35px;
  width: 258px;
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
    left: -9.5px;
  }
`;

export const ClientMessage = styled.div`
  position: relative;
  right: -45px;
  height: 35px;
  width: 679px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: right;
  align-items: center;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 10px;
  padding-right: 20px;

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent ${(props) => props.theme.mainColor};
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

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
export const Box = styled.div<{ bgcolor?: string }>`
  display: flex;
  flex-basis: 60%;
  align-items: center;
  justify-content: center;
  height: 15px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  width: 17px;
  height: 17px;
  padding: 0;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.2);
  }
`;
export const ColorBox = styled.div`
  position: absolute;
  right: 130px;
  top: 270px;
  z-index: 100;
`;
export const ColorText = styled.span`
  flex-basis: 20%;
`;
