import styled from "styled-components";
import doneImg from "../../../assets/workspaceImage/doneImg.svg";
import anotherlinkImg from "../../../assets/workspaceImage/anotherlinkImg.svg";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentsContainer = styled.div`
  position: relative;
  background: transparent;
  height: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  height: 95px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 20px;
  height: 40px;
  border: 0;
  color: #fff;
  margin-bottom: 15px;
  padding: 7px 0px;
  cursor: pointer;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  &:hover {
    opacity: 0.8;
  }
`;

export const LinkCopyBtn = styled(Button)`
  background-color: ${(props) => props.theme.mainColor};
`;
export const GotoClientBtn = styled(Button)`
  background-color: ${(props) => props.theme.subColor};
`;
export const DoneImg = styled.img.attrs({
  src: doneImg,
})`
  width: 42px;
  height: 44px;
`;
export const Description = styled.p`
  width: 100%;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  margin-bottom: 40px;
  margin-top: 20px;
  color: #717171;
  font-size: 30px;
`;

export const LinkImg = styled.img.attrs({
  src: anotherlinkImg,
})`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;
