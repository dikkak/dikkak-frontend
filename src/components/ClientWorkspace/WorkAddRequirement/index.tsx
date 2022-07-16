import React, { RefObject } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { requestMessageAtom, workspaceNumAtom, workStepAtom } from '../../../atoms';
import {
  MessageBox,
  SystemMessage,
  ClientMessage,
  NextStepButton,
  Circle,
  Title,
} from "./styles";

interface IAddRequirementProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkAddRequirement = ({textRef}: IAddRequirementProps) => {
  const requestMessage = useRecoilValue(requestMessageAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const setWorkStep = useSetRecoilState(workStepAtom);
  const onClick = () => {
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
      );
    setWorkspaceNum(prev => prev+1);
    setWorkStep(prev => {
      return {
        ...prev,
        additionStep: 'done',
        submitStep: 'now'
      }
    })
  };

  return (
    <MessageBox>
      <Title>
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        추가 요청 사항(선택)
      </Title>
      <SystemMessage>그외 추가 요청사항을 작성해주세요</SystemMessage>
      {requestMessage ? (
        <>
          <ClientMessage>{requestMessage}</ClientMessage>
        </>
      ) : null}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextStepButton onClick={onClick}>
          <Circle color="#EFDC34" />
            NEXT STEP
          <Circle color="#28BF1B" />
        </NextStepButton>
      </div>
    </MessageBox>
  );
};

export default WorkAddRequirement;
