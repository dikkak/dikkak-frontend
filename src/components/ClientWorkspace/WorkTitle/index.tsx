import React, { RefObject } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { titleMessageAtom, workspaceNumAtom, workStepAtom } from '../../../atoms';
import {
  MessageBox,
  SystemMessage,
  ClientMessage,
  NextStepButton,
  Circle,
  Title,
} from "./styles";

interface IWorkTitleProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkTitle = ({textRef}: IWorkTitleProps) => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const titleMessage = useRecoilValue(titleMessageAtom); 
  const onClick = () => {
    setWorkspaceNum(prev => prev+1);
    setWorkStep(prev => {
      return {
        ...prev,
        titleStep: 'done',
        workChoiceStep: 'now'
      }
    })
    textRef.current?.setAttribute('placeholder','마우스를 이용해 선택해주세요');
  };
  return (
    <>
      <MessageBox>
        <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>제목 입력</Title>
        <SystemMessage>제안서의 제목을 입력해 주세요</SystemMessage>
        {titleMessage ? (
          <>
            <ClientMessage>{titleMessage}</ClientMessage>
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
