import styled from "styled-components";
import linkImg from "../../../assets/workspaceImage/linkImage.png";

export const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
  padding: 13px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
`;

export const SystemMessage = styled.p`
  height: 35px;
  width: 315px;
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
  margin-bottom: 20px;
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
  opacity: 0.2;

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

export const InnerContainer = styled.div`
  padding: 10px;
  width: 100%;
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 15px;
  font-size: 24px;
  color: ${(props) => props.theme.mainColor};
  cursor: pointer;
`;

export const FileComment = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  padding: 2px 0;
  margin-left: 5px;
  text-decoration-line: underline;
  text-decoration-color: #bababa;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const InputBoxLabel = styled.label`
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
`;
export const InputBox = styled.input.attrs({
  type: "file",
})`
  display: flex;
  width: 100%;
  height: 100%;
  display: none;
  cursor: pointer;
`;

export const Text = styled.p`
  margin-left: 15px;
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
`;

export const FileImgContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileUploadImg = styled.img.attrs({ src: linkImg })`
  width: 20px;
  height: 20px;
`;
