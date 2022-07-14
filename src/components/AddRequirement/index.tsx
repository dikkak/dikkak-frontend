import React, { RefObject, Dispatch, SetStateAction } from "react";
import {
  MessageBox,
  SystemMessage,
  ClientMessage,
  NextStepButton,
  Circle,
  Title,
} from "./styles";

interface IAddRequirement {
  requestMessage: string | undefined;
  workspaceNum: number;
  textRef: RefObject<HTMLTextAreaElement>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
}

const AddRequirement = ({
  requestMessage,
  workspaceNum,
  textRef,
  setworkspaceNum,
}: IAddRequirement) => {
  const onClick = () => {
    setworkspaceNum((workspaceNum += 1));
    textRef.current?.setAttribute(
      "placeholder",
      "마우스를 이용해 선택해주세요"
    );
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

export default AddRequirement;
