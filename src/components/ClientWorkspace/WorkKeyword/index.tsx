import React, { RefObject, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isTagInputSubmittedAtom,
  keyWordListAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
import { SystemMessage2 } from "../WorkPurpose/styles";
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
  tagRef: RefObject<HTMLInputElement>;
}

const WorkKeyword = ({ tagRef }: IWorkKeywordProps) => {
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const isTagInputSubmitted = useRecoilValue(isTagInputSubmittedAtom);
  const keywordList = useRecoilValue(keyWordListAtom);
  const onClick = () => {
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.keyWordStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          keyWordStep: "done",
          deadLineStep: "now",
        };
      });
    }
  };
  useEffect(() => {
    tagRef.current?.focus();
    tagRef.current?.setAttribute("placeholder", "키워드를 입력하세요");
  }, [tagRef]);

  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          키워드 선택
        </Title>
        <SystemMessage>
          디자인 컨셉 키워드를 선정해주세요 ex) 한국적인,차분한, 밝은
        </SystemMessage>
        <SystemMessage2>
          키워드 작성은 ‘Enter’로 다음 STEP 전환은 ‘전송하기’ 버튼을 통해
          동작해주세요!
        </SystemMessage2>
        {isTagInputSubmitted && keywordList.length > 0 ? (
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
