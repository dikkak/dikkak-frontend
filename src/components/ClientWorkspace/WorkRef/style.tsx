import styled from "styled-components";
import earthImg from "../../../assets/workspaceImage/earthImg.svg";
import linkImg from "../../../assets/workspaceImage/linkImage.png";

export const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 13px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
`;

export const SystemMessage = styled.p`
  height: 35px;
  width: 393px;
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
    left: -11.5px;
  }
`;

export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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

export const UploadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  &:first-child {
    margin-top: 15px;
  }
`;

export const UploadContainer = styled.div`
  width: 679px;
  height: 140px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

export const ContentBox = styled.div`
  position: relative;
  width: 630px;
  height: 114px;
  display: flex;
  justify-content: space-between;
`;

export const FileUploadLabel = styled.label<{
  bgcolor?: string;
  borderColor?: string;
}>`
  width: 200px;
  height: 114px;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.borderColor};
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileUpload = styled.input.attrs({
  type: "file",
  accept: "image/jpg, image/png, image/jpeg",
})`
  display: none;
`;

export const FileUploadImg = styled.img.attrs({ src: linkImg })`
  width: 20px;
  height: 20px;
`;

export const TextContainer = styled.div`
  width: 426px;
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0px;
`;

export const Text = styled.textarea<{ bgcolor?: string; borderColor?: string }>`
  width: 426px;
  height: 114px;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.borderColor};
  padding: 10px;

  color: #717171;
  resize: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.borderColor};
    background: #fff;
  }
`;

export const PlaceholderP = styled.p`
  font-family: "Noto Sans KR";
  background-color: #000;
  position: absolute;
  color: #717171;
  background: transparent;
  font-size: 15px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const PreviewImg = styled.div<{ url?: string }>`
  background-image: url(${(props) => props.url || ""});
  width: 200px;
  height: 112px;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
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

export const TextFirst = styled(Text)``;
export const TextSecond = styled(Text)``;
export const TextThird = styled(Text)``;
export const TextFourth = styled(Text)``;
export const TextFifth = styled(Text)``;
