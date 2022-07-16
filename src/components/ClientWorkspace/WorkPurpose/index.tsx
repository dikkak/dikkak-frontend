import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { purponseMessageAtom, workspaceNumAtom, workStepAtom } from '../../../atoms';
import {
  Circle,
  ClientMessage,
  MessageBox,
  NextStepButton,
  SystemMessage,
  Title,
} from "./styles";

const WorkPurpose = () => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const purposeMessage = useRecoilValue(purponseMessageAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const onClick = () => {
    setWorkspaceNum(prev => prev+1);
    setWorkStep(prev => {
      return {
        ...prev,
        purposeStep: 'done',
        keyWordStep: 'now'
      }
    })
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
