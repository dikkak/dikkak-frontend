import styled from "styled-components";

export const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 10px;
`;

export const SystemMessage = styled.p`
  height: 35px;
  width: 248px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 20px;
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
    left: -12px;
  }
`;

export const ClientMessage = styled.p`
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
  margin-bottom: 25px;
  padding-right: 20px;

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
