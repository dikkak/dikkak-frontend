import React, { RefObject } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { deadLineAtom, isDoneAtom, keyWordListAtom, mainColorAtom, purponseMessageAtom, referenceContentsAtom, requestMessageAtom, subColorsAtom, titleMessageAtom } from '../../../atoms';
import {
  MessageBox,
  Title,
  SystemMessage,
  NextStepButton,
  Circle,
} from "./style";

interface ISubmitProps {
  textRef: RefObject<HTMLTextAreaElement>;
}

const WorkSubmit = ({textRef}: ISubmitProps) => {
  const titleMessage = useRecoilValue(titleMessageAtom);
  const purposeMessage = useRecoilValue(purponseMessageAtom);
  const keyWordList = useRecoilValue(keyWordListAtom);
  const deadLine = useRecoilValue(deadLineAtom);
  const mainColor = useRecoilValue(mainColorAtom);
  const subColors = useRecoilValue(subColorsAtom);
  const referenceContents = useRecoilValue(referenceContentsAtom);
  const requestMessage = useRecoilValue(requestMessageAtom);

  const setIsDone = useSetRecoilState(isDoneAtom);
  const onClick = () => {
    console.log({
      title: titleMessage,
      purpose: purposeMessage,
      keyWord: keyWordList,
      deadLine,
      mainColor,
      subColors,
      referenceContents,
      requestMessage
    })
    setIsDone((prev) => !prev);
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
        제출하기
      </Title>
      <SystemMessage>
        좌측 STEP창을 눌러 내용을 다시 한번 확인한 후 제출하기 버튼을 눌러주세요
      </SystemMessage>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NextStepButton onClick={onClick}>
          <Circle color="#EFDC34" />
            제출하기
          <Circle color="#28BF1B" />
        </NextStepButton>
      </div>
    </MessageBox>
  );
};

export default WorkSubmit;
