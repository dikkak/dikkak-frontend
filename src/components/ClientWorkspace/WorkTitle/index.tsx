import React, { RefObject, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  titleMessageAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
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

const WorkTitle = ({ textRef }: IWorkTitleProps) => {
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const titleMessage = useRecoilValue(titleMessageAtom);
  const onClick = () => {
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.titleStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          titleStep: "done",
          workChoiceStep: "now",
        };
      });
    }
  };
  useEffect(() => {
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute("placeholder", "제목을 입력하세요");
  }, [textRef]);
  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          제목 입력
        </Title>
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
