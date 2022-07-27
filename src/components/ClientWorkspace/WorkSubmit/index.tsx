import React, { RefObject } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { submitProposal } from "../../../apis/proposal";
import {
  deadLineAtom,
  isDoneAtom,
  IWorkChoice,
  IWorkDetail,
  keyWordListAtom,
  mainColorAtom,
  purposeMessageAtom,
  referenceContentsAtom,
  requestMessageAtom,
  subColorsAtom,
  titleMessageAtom,
  workChoiceAtom,
  workDetailAtom,
  workEtcAtom,
} from "../../../atoms";
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

const WorkSubmit = ({ textRef }: ISubmitProps) => {
  const titleMessage = useRecoilValue(titleMessageAtom);
  const workChoice = useRecoilValue(workChoiceAtom);
  const workDetail = useRecoilValue(workDetailAtom);
  const purposeMessage = useRecoilValue(purposeMessageAtom);
  const keyWordList = useRecoilValue(keyWordListAtom);
  const deadLine = useRecoilValue(deadLineAtom);
  const mainColor = useRecoilValue(mainColorAtom);
  const subColors = useRecoilValue(subColorsAtom);
  const referenceContents = useRecoilValue(referenceContentsAtom);
  const requestMessage = useRecoilValue(requestMessageAtom);
  const setIsDone = useSetRecoilState(isDoneAtom);
  const workEtcContents = useRecoilValue(workEtcAtom);

  // 데이터 가공
  let category;
  for (let cat in workChoice) {
    if (workChoice[cat as keyof IWorkChoice]) category = cat;
  }
  let detail;
  for (let det in workDetail) {
    if (workDetail[det as keyof IWorkDetail]) detail = det;
  }
  let subColorsData: string[] = [];
  subColors.map((item) => {
    return subColorsData.push(item.color);
  });
  let referenceDesc: string[] = [];
  referenceContents.map((item) => {
    return referenceDesc.push(item.description || "");
  });
  let referenceFile: File[] = [];
  referenceContents.map((item) => {
    return referenceFile.push(item.file!);
  });
  let workEtcFile: File[] = [];
  workEtcContents.map((item) => {
    return workEtcFile.push(item.file!);
  });

  //
  const jsonData = {
    title: titleMessage,
    category,
    detail,
    purpose: purposeMessage,
    keywords: keyWordList,
    deadline: deadLine,
    mainColor: mainColor.color,
    subColors: subColorsData,
    referenceDesc,
    additionalDesc: requestMessage,
  };

  let formData = new FormData();
  formData.append(
    "jsonData",
    new Blob([JSON.stringify(jsonData)], { type: "application/json" })
  );

  referenceContents.map((item) => formData.append("referenceFile", item.file!));
  workEtcContents.map((item) => formData.append("etcFile", item.file!));

  const onClick = () => {
    submitProposal(formData).then((res) => {
      console.log(res);
      setIsDone((prev) => !prev);
      textRef.current?.setAttribute(
        "placeholder",
        "마우스를 이용해 선택해주세요"
      );
    });
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
