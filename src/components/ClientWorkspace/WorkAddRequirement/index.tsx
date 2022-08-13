import React, { RefObject, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  requestMessageAtom,
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

interface IAddRequirementProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkAddRequirement = ({ textRef }: IAddRequirementProps) => {
  const requestMessage = useRecoilValue(requestMessageAtom);
  const setWorkspaceNum = useSetRecoilState(workspaceNumAtom);
  const [workStep, setWorkStep] = useRecoilState(workStepAtom);
  const onClick = () => {
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
    );
    setWorkspaceNum((prev) => prev + 1);
    if (workStep.additionStep !== "done") {
      setWorkStep((prev) => {
        return {
          ...prev,
          additionStep: "done",
          submitStep: "now",
        };
      });
    }
  };
  useEffect(() => {
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute("placeholder", "추가 요청 사항을 입력하세요");
  }, [textRef]);

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
