import React, { RefObject, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { keyWordListAtom, workspaceNumAtom, workStepAtom } from '../../atoms';
import {
  Circle,
  ClientMessage,
  MessageBox,
  NextStepButton,
  SystemMessage,
  TagItem,
  TagText,
  Title,
} from "./styles";

interface IWorkKeywordProps {
  isTagInputClicked: boolean;
  tagRef: RefObject<HTMLInputElement>;
}

const WorkKeyword = ({ isTagInputClicked, tagRef }: IWorkKeywordProps) => {
  const setWorkStep = useSetRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const keywordList = useRecoilValue(keyWordListAtom);
  const onClick = () => {
    setWorkspaceNum(prev => prev+1);
    setWorkStep(prev => {
      return {
        ...prev,
        keyWordStep: 'done',
        deadLineStep: 'now'
      }
    })
  };
  useEffect(() => {
    tagRef.current?.focus();
    tagRef.current?.setAttribute("placeholder", "키워드를 입력하세요");
  }, [tagRef]);

  return (
    <>
      <MessageBox>
        <Title><Circle color='#905DFB' style={{display: 'inline-block', marginRight: '5px'}}/>키워드 선택</Title>
        <SystemMessage>
          디자인 컨셉 키워드를 선정해주세요 ex) 한국적인,차분한, 밝은
        </SystemMessage>
        {isTagInputClicked ? (
          <>
            <ClientMessage>
              {keywordList.map((tagItem, index) => {
                return (
                  <TagItem key={index}>
                    <TagText>{tagItem}</TagText>
                  </TagItem>
                );
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
