import React, { RefObject } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { workspaceNumAtom, workStepAtom } from "../../../atoms";
import {
  MessageBox,
  SystemMessage,
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
  const onClick = () => {
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.etcStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          etcStep: "done",
          additionStep: "now",
        };
      });
    }
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute(
      "placeholder",
      "추가 요청사항을 작성해주세요"
    );
  };
  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          기타 파일 업로드 (선택)
        </Title>
        <SystemMessage>
          디자인 작업에 참고할 레퍼런스를 등록해주세요
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

export default WorkTitle;
