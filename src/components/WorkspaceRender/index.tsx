import React, { Dispatch, SetStateAction } from "react";
import WorkTitle from "../WorkTitle/";
import JobChoice from "../JobChoice/";

interface WorspaceNumProtection {
  workspaceNum: number | undefined;
  message: string;
  setworkspaceNum: Dispatch<SetStateAction<number>>;
}

function switchFcn(
  workspaceNum: number | undefined,
  message: string,
  setworkspaceNum: Dispatch<SetStateAction<number>>
) {
  switch (workspaceNum) {
    case 1:
      return (
        <WorkTitle
          workspaceNum={workspaceNum}
          message={message}
          setworkspaceNum={setworkspaceNum}
        ></WorkTitle>
      );
    case 2:
      return <JobChoice></JobChoice>;
  }
}

const WorkspaceRender = ({
  workspaceNum,
  message,
  setworkspaceNum,
}: WorspaceNumProtection) => {
  return <>{switchFcn(workspaceNum, message, setworkspaceNum)}</>;
};

export default WorkspaceRender;
