import React, { Dispatch, RefObject, SetStateAction } from "react";
import { Circle, MessageBox, NextStepButton, SystemMessage } from "./style";

interface MessageProtection {
  textRef: RefObject<HTMLTextAreaElement>,
  workspaceNum: number;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  purposeStep: Dispatch<SetStateAction<string>>;
  detailStep: Dispatch<SetStateAction<string>>;
}

const WorkDetail = ({
  textRef,
  workspaceNum,
  setworkspaceNum,
  purposeStep,
  detailStep
}: MessageProtection) => {
  const onClick =() => {
    setworkspaceNum((workspaceNum += 1));
    purposeStep("now");
    detailStep("done");
    textRef.current?.removeAttribute('disabled');
    textRef.current?.setAttribute('placeholder', '디자인 용도를 입력해주세요')
    textRef.current?.focus();
  }
  return (
    <>
      <MessageBox>
        <SystemMessage>맡기고자 하는 디자인분야를 선택해주세요</SystemMessage>
        <SystemMessage>
          인쇄과정까지 외주로 진행하실건가요?(명함 선택시)
        </SystemMessage>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NextStepButton onClick={onClick}>
            <Circle color="#EFDC34" />
              NEXT STEP
            <Circle color="#28BF1B" />
          </NextStepButton>
        </div>
      </MessageBox>
    </>
  );
};

export default WorkDetail;
