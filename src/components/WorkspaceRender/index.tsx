import React, { Dispatch, RefObject, SetStateAction } from "react";
import WorkTitle from "../WorkTitle/";
import WorkChoice from "../WorkChoice";
import WorkPurpose from "../WokrPurpose";
import WorkKeyword from "../WorkKeyword";
import WorkDetail from "../WorkDetail";

interface WorkspaceNumProtection {
  workspaceNum: number | undefined;
  message: string;
  purposeMessage: string;
  tagList: string[];
  isTagInputClicked: boolean;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  titleStep: Dispatch<SetStateAction<string>>;
  workStep: Dispatch<SetStateAction<string>>;
  detailStep: Dispatch<SetStateAction<string>>;
  purposeStep: Dispatch<SetStateAction<string>>;
  keyWordStep: Dispatch<SetStateAction<string>>;
  deadLineStep: Dispatch<SetStateAction<string>>;
  colorStep: Dispatch<SetStateAction<string>>;
  referenceStep: Dispatch<SetStateAction<string>>;
  etcStep: Dispatch<SetStateAction<string>>;
  additionStep: Dispatch<SetStateAction<string>>;
  submitStep: Dispatch<SetStateAction<string>>;
}

function switchFcn(
  workspaceNum: number | undefined,
  message: string,
  purposeMessage: string,
  tagList: string[],
  isTagInputClicked: boolean,
  textRef: RefObject<HTMLTextAreaElement>,
  tagRef: RefObject<HTMLInputElement>,
  setworkspaceNum: Dispatch<SetStateAction<number>>,
  titleStep: Dispatch<SetStateAction<string>>,
  workStep: Dispatch<SetStateAction<string>>,
  detailStep: Dispatch<SetStateAction<string>>,
  purposeStep: Dispatch<SetStateAction<string>>,
  keyWordStep: Dispatch<SetStateAction<string>>,
  deadLineStep: Dispatch<SetStateAction<string>>,
  colorStep: Dispatch<SetStateAction<string>>,
  referenceStep: Dispatch<SetStateAction<string>>,
  etcStep: Dispatch<SetStateAction<string>>,
  additionStep: Dispatch<SetStateAction<string>>,
  submitStep: Dispatch<SetStateAction<string>>
) {
  switch (workspaceNum) {
    case 1:
      return (
        <WorkTitle
          workspaceNum={workspaceNum}
          message={message}
          textRef={textRef}
          setworkspaceNum={setworkspaceNum}
          titleStep={titleStep}
          workStep={workStep}
        ></WorkTitle>
      );
    case 2:
      return (
        <WorkChoice
          workStep={workStep}
          detailStep={detailStep}
          purposeStep={purposeStep}
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
        ></WorkChoice>
      );
    case 3:
      return (
      <WorkDetail
        textRef={textRef}
        workspaceNum={workspaceNum}
        setworkspaceNum={setworkspaceNum}
        purposeStep={purposeStep}
        detailStep={detailStep}
      ></WorkDetail>
      );
    case 4:
      return (
        <WorkPurpose
          purposeMessage={purposeMessage}
          textRef={textRef}
          tagRef={tagRef}
          purposeStep={purposeStep}
          keywordStep={keyWordStep}
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
        ></WorkPurpose>
      );
    case 5:
      return (
        <WorkKeyword
          message={message}
          tagList={tagList}
          isTagInputClicked={isTagInputClicked}
          textRef={textRef}
          tagRef={tagRef}
          keywordStep={keyWordStep}
          deadLineStep={deadLineStep}
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
        ></WorkKeyword>
      );
  }
}

const WorkspaceRender = ({
  workspaceNum,
  message,
  purposeMessage,
  tagList,
  isTagInputClicked,
  textRef,
  tagRef,
  setworkspaceNum,
  titleStep,
  workStep,
  detailStep,
  purposeStep,
  keyWordStep,
  deadLineStep,
  colorStep,
  referenceStep,
  etcStep,
  additionStep,
  submitStep,
}: WorkspaceNumProtection) => {
  return (
    <>
      {switchFcn(
        workspaceNum,
        message,
        purposeMessage,
        tagList,
        isTagInputClicked,
        textRef,
        tagRef,
        setworkspaceNum,
        titleStep,
        workStep,
        detailStep,
        purposeStep,
        keyWordStep,
        deadLineStep,
        colorStep,
        referenceStep,
        etcStep,
        additionStep,
        submitStep
      )}
    </>
  );
};

export default WorkspaceRender;
