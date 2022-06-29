import React, { Dispatch, SetStateAction } from "react";
import WorkTitle from "../WorkTitle/";
import WorkChoice from "../WorkChoice";

interface WorspaceNumProtection {
  workspaceNum: number | undefined;
  message: string;
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
          workspaceNum={workspaceNum}
          setworkspaceNum={setworkspaceNum}
        ></WorkChoice>
      );
  }
}

const WorkspaceRender = ({
  workspaceNum,
  message,
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
}: WorspaceNumProtection) => {
  return (
    <>
      {switchFcn(
        workspaceNum,
        message,
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
