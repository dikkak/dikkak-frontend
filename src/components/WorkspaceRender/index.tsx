import React, { Dispatch, RefObject, SetStateAction } from "react";
import WorkTitle from "../WorkTitle/";
import WorkChoice from "../WorkChoice";
import WorkPurpose from "../WokrPurpose";
import WorkKeyword from "../WorkKeyword";
import WorkDetail from "../WorkDetail";
import WorkDeadLine from "../WorkDeadLine";
import WorkRef from "../WorkRef";
import AddRequirement from "../AddRequirement";
import Submit from "../Submit";
import { IColor } from "../../pages/WorkSpace_client";
import WorkColor from "../WorkColor";
import { IContents } from "../../pages/WorkSpace_client";

interface IWorkspaceNumProps {
  workspaceNum: number | undefined;
  message: string;
  purposeMessage: string;
  tagList: string[];
  isTagInputClicked: boolean;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
  deadLine: string | undefined;
  setDeadLine: Dispatch<SetStateAction<string | undefined>>;
  mainColor: IColor;
  subColors: IColor[];
  setMainColor: Dispatch<SetStateAction<IColor>>;
  setSubColors: Dispatch<SetStateAction<IColor[]>>;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
  setEtcStep: Dispatch<SetStateAction<string>>;
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
  contents: IContents[];
  setContents: Dispatch<SetStateAction<IContents[]>>;
  requestMessage: string;
  isDone: Dispatch<SetStateAction<boolean>>;
}

function switchFcn(
  workspaceNum: number | undefined,
  message: string,
  purposeMessage: string,
  tagList: string[],
  isTagInputClicked: boolean,
  textRef: RefObject<HTMLTextAreaElement>,
  tagRef: RefObject<HTMLInputElement>,
  deadLine: string | undefined,
  mainColor: IColor,
  subColors: IColor[],
  setMainColor: Dispatch<SetStateAction<IColor>>,
  setSubColors: Dispatch<SetStateAction<IColor[]>>,
  setDeadLine: Dispatch<SetStateAction<string | undefined>>,
  setworkspaceNum: Dispatch<SetStateAction<number>>,
  setEtcStep: Dispatch<SetStateAction<string>>,
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
  submitStep: Dispatch<SetStateAction<string>>,
  contents: IContents[],
  setContents: Dispatch<SetStateAction<IContents[]>>,
  requestMessage: string,
  isDone: Dispatch<SetStateAction<boolean>>
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
          tagRef={tagRef}
          workStep={workStep}
          detailStep={detailStep}
          purposeStep={purposeStep}
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
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
    case 6:
      return (
        <WorkDeadLine
          deadLine={deadLine}
          setDeadLine={setDeadLine}
          textRef={textRef}
          deadLineStep={deadLineStep}
          colorStep={colorStep}
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
        ></WorkDeadLine>
      );
    case 7:
      return (
        <WorkColor
          mainColor={mainColor}
          setMainColor={setMainColor}
          subColors={subColors}
          setSubColors={setSubColors}
          colorStep={colorStep}
          referenceStep={referenceStep}
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
        ></WorkColor>
      );
    case 8:
      return (
        <WorkRef
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
          referenceStep={referenceStep}
          setEtcStep={setEtcStep}
          setContents={setContents}
          contents={contents}
        ></WorkRef>
      );
    case 10:
      return (
        <AddRequirement
          workspaceNum={workspaceNum}
          requestMessage={requestMessage}
          textRef={textRef}
          setworkspaceNum={setworkspaceNum}
        ></AddRequirement>
      );
    case 11:
      return (
        <Submit
          workspaceNum={workspaceNum}
          textRef={textRef}
          setworkspaceNum={setworkspaceNum}
          isDone={isDone}
        ></Submit>
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
  deadLine,
  mainColor,
  subColors,
  setMainColor,
  setSubColors,
  setDeadLine,
  setworkspaceNum,
  setEtcStep,
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
  contents,
  setContents,
  requestMessage,
  isDone,
}: IWorkspaceNumProps) => {
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
        deadLine,
        mainColor,
        subColors,
        setMainColor,
        setSubColors,
        setDeadLine,
        setworkspaceNum,
        setEtcStep,
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
        contents,
        setContents,
        requestMessage,
        isDone
      )}
    </>
  );
};

export default WorkspaceRender;
