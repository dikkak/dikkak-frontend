import styled from "styled-components";
import fileImg from "../../../assets/workspaceImage/fileImg.svg";
import emojiImg from "../../../assets/workspaceImage/emojiImg.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ChatBox = styled.div`
  position: relative;
  flex: 75;
  width: 100%;
  padding: 8px 8px 0 8px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 15px;
`;

export const TextContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 140px;
  background: rgba(240, 240, 240, 0.5);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 15px;
`;
export const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const Text = styled.textarea.attrs({
  placeholder: "내용을 입력하세요",
})`
  width: 100%;
  height: 75px;
  background: transparent;
  padding: 3px 25px 3px 3px;
  border: 0;
  margin: 25px 0 0 25px;
  font-family: Inter;
  border-radius: 15px;
  outline: none;
  resize: none;
  color: #717171;
  white-space: pre-wrap;
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
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
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

export const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const InputArea = styled.div`
  flex: 0.8;
`;
export const AdditionalButtons = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.2;
`;
export const SubmitButton = styled.button`
  width: 150px;
  height: 105px;
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

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  font-size: 8px;
  font-weight: 1000;
  background-color: #c4c4c4;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;
