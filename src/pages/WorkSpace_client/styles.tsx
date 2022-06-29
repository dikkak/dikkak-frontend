import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import fileImg from "../../assets/workspaceImage/fileImg.svg";
import emojiImg from "../../assets/workspaceImage/emojiImg.svg";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 82px;
  height: auto;
`;

export const Wrapper = styled.div`
  max-width: 1178px;
  min-width: 960px;
  height: 650px;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  margin-bottom: 30px;
`;

export const BackButton = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;
  height: 30px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: white;
  }
`;

export const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  line-height: 20px;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 0.7em;
  width: 30px;
  height: 30px;
`;

export const StoreBtn = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;
  color: #fff;
  height: 30px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: space-between;
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

export const BlurBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 170px;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(30px);
  /* border: 1px solid #000; */
  border-radius: 5px;
  background-color: #fafafa;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  /* &:first-child {
    margin-right: 5rem;
  } */
`;

export const Box = styled.div`
  width: 774px;
  height: 100%;
  /* margin-right: 76px; */
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: transparent;
`;

export const StepTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  color: #329a29;
  h3 {
    color: ${(props) => props.theme.subColor};
    &::before {
      background: ${(props) => props.theme.mainColor};
      border: 3px solid ${(props) => props.theme.mainColor};
    }
  }
`;
export const Step = styled.h3`
  color: black;
  position: relative;
  width: 100%;
  margin: 0 0 0 30px;
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    left: -24.5px;
  }
`;

export const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 333px;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const SystemMessage = styled.p`
  height: 35px;
  width: 215px;
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
    left: -10.5px;
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
export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 195px;
  background: rgba(240, 240, 240, 0.5);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 15px;
`;

export const Text = styled.textarea.attrs({
  placeholder: "제목을 입력하세요",
})`
  width: 533px;
  height: 100px;
  background: transparent;
  padding: 3px;
  border: 0;
  margin: 25px 0 0 25px;
  font-family: Inter;
  border-radius: 15px;
  outline: none;
  resize: none;
  color: #717171;
  &:focus {
    outline: none;
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
  width: 55%;
  margin: 50px auto;
  height: 70%;
`;
export const Outer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;
export const TimeStep = styled.h3<{ step: string }>`
  color: ${(props) =>
    props.step === "done"
      ? props.theme.mainColor
      : props.step === "now"
      ? props.theme.subColor
      : "#C4C4C4"};
  position: relative;
  padding: 0 0 0 20px;
  font-size: ${(props) => (props.step === "now" ? "14px" : "12px")};
  border-left: 1px solid
    ${(props) => (props.step === "done" ? props.theme.mainColor : "#C4C4C4")};
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${(props) =>
      props.step === "done" || props.step === "now"
        ? props.theme.mainColor
        : "#C4C4C4"};
    border: 3px solid
      ${(props) =>
        props.step === "done" || props.step === "now"
          ? props.theme.mainColor
          : "#C4C4C4"};
    border-radius: 999px;
    left: -8.5px;
  }
`;

export const TitleTimeStep = styled(TimeStep)``;
export const WorkTimeStep = styled(TimeStep)``;
export const DetailTimeStep = styled(TimeStep)``;
export const PurposeTimeStep = styled(TimeStep)``;
export const KeyWordTimeStep = styled(TimeStep)``;
export const DeadLineTimeStep = styled(TimeStep)``;
export const ColorTimeStep = styled(TimeStep)``;
export const ReferenceTimeStep = styled(TimeStep)``;
export const EtcTimeStep = styled(TimeStep)``;
export const AdditionTimeStep = styled(TimeStep)``;
export const SubmitTimeStep = styled(TimeStep)``;

export const InputArea = styled.div`
  flex: 0.7;
`;
export const AdditionalButtons = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
  margin-left: 25px;
  margin-top: 25px;
`;
export const FileButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${fileImg});
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const EmojiButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${emojiImg});
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const SubmitArea = styled.div`
  flex: 0.3;
  margin: 25px 25px 0 0;
`;
export const SubmitButton = styled.button`
  width: 150px;
  height: 70px;
  background-color: ${(props) => props.theme.subColor};
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const EditButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 10px;
  background-color: #717171;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
