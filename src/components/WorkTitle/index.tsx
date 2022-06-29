import React, { Dispatch, SetStateAction } from "react";
import {
  MessageBox,
  SystemMessage,
  ClientMessage,
  NextStepButton,
  Circle,
} from "./styles";

interface MessageProtection {
  message: string | undefined;
  workspaceNum: number;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  titleStep: Dispatch<SetStateAction<string>>;
  workStep: Dispatch<SetStateAction<string>>;
}

const WorkTitle = ({
  message,
  workspaceNum,
  setworkspaceNum,
  titleStep,
  workStep,
}: MessageProtection) => {
  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    titleStep("done");
    workStep("now");
  };

  return (
    <>
      <MessageBox>
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
