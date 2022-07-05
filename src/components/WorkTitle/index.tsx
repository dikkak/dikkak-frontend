import React, { Dispatch, RefObject, SetStateAction } from "react";
import {
  MessageBox,
  SystemMessage,
  ClientMessage,
  NextStepButton,
  Circle,
  Title,
} from "./styles";

interface IWorkTitleProps {
  message: string | undefined;
  workspaceNum: number;
  textRef: RefObject<HTMLTextAreaElement>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  titleStep: Dispatch<SetStateAction<string>>;
  workStep: Dispatch<SetStateAction<string>>;
}

const WorkTitle = ({
  message,
  workspaceNum,
  textRef,
  setworkspaceNum,
  titleStep,
  workStep,
}: IWorkTitleProps) => {
  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    titleStep("done");
    workStep("now");
    textRef.current?.setAttribute('placeholder','마우스를 이용해 선택해주세요');
  };
  return (
    <>
      <MessageBox>
        <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>제목 입력</Title>
        <SystemMessage>제안서의 제목을 입력해 주세요</SystemMessage>
        {message ? (
          <>
            <ClientMessage>{message}</ClientMessage>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NextStepButton onClick={onClick}>
                <Circle color="#EFDC34" />
                NEXT STEP
                <Circle color="#28BF1B" />
              </NextStepButton>
            </div>
          </>
        ) : null}
      </MessageBox>
    </>
  );
};

export default WorkTitle;
