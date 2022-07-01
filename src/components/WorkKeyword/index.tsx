import React, { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';
import { Circle, ClientMessage, MessageBox, NextStepButton, SystemMessage, TagItem, TagText } from './styles';

interface MessageProtection {
  message: string;
  tagList: string[];
  isTagInputClicked: boolean;
  workspaceNum: number;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  keywordStep: Dispatch<SetStateAction<string>>;
  deadLineStep: Dispatch<SetStateAction<string>>;
}

const WorkKeyword = ({
  message,
  tagList,
  isTagInputClicked,
  workspaceNum,
  textRef,
  tagRef,
  setworkspaceNum,
  keywordStep,
  deadLineStep
}: MessageProtection) => {
  
  const onClick =() => {
    
  };
  useEffect(() => {
    tagRef.current?.focus();
    tagRef.current?.setAttribute('placeholder', '키워드를 입력하세요')
  },[tagRef]);
  return (
    <>
      <MessageBox>
        <SystemMessage>디자인 컨셉 키워드를 선정해주세요 ex) 한국적인,차분한, 밝은</SystemMessage>
        {isTagInputClicked ? (
          <>
            <ClientMessage>
              {tagList.map((tagItem, index) => {
                return (
                  <TagItem key={index}>
                    <TagText>{tagItem}</TagText>
                  </TagItem>
                )
              })}
            </ClientMessage>
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

export default WorkKeyword;