import React, { RefObject, Dispatch, SetStateAction } from "react";
import {
  MessageBox,
  Title,
  SystemMessage,
  NextStepButton,
  Circle,
} from "./style";

interface ISubmitProps {
  workspaceNum: number;
  textRef: RefObject<HTMLTextAreaElement>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  isDone: Dispatch<SetStateAction<boolean>>;
}

const Submit = ({
  workspaceNum,
  textRef,
  setworkspaceNum,
  isDone,
}: ISubmitProps) => {
  const onClick = () => {
    isDone((prev) => !prev);
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
    );
  };
  return (
    <MessageBox>
      <Title>
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        제출하기
      </Title>
      <SystemMessage>
        좌측 STEP창을 눌러 내용을 다시 한번 확인한 후 제출하기 버튼을 눌러주세요
      </SystemMessage>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextStepButton onClick={onClick}>
          <Circle color="#EFDC34" />
          제출하기
          <Circle color="#28BF1B" />
        </NextStepButton>
      </div>
    </MessageBox>
  );
};

export default Submit;
