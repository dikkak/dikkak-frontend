import React, { Dispatch, RefObject, SetStateAction } from "react";
import {
  Circle,
  ClientMessage,
  MessageBox,
  NextStepButton,
  SystemMessage,
  Title,
} from "./styles";

interface IWorkPurposeProps {
  purposeMessage: string;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
  purposeStep: Dispatch<SetStateAction<string>>;
  keywordStep: Dispatch<SetStateAction<string>>;
  workspaceNum: number;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
}

const WorkPurpose = ({
  purposeMessage,
  textRef,
  tagRef,
  purposeStep,
  keywordStep,
  workspaceNum,
  setworkspaceNum,
}: IWorkPurposeProps) => {
  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    purposeStep("done");
    keywordStep("now");
  };
  return (
    <>
      <MessageBox>
        <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>사용 목적</Title>
        <SystemMessage>디자인의 용도는 무엇인가요</SystemMessage>
        {purposeMessage ? (
          <>
            <ClientMessage>{purposeMessage}</ClientMessage>
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

export default WorkPurpose;
