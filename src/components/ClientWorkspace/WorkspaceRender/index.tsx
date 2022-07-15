import React, { RefObject } from "react";
import WorkTitle from "../WorkTitle";
import WorkChoice from "../WorkChoice";
import WorkPurpose from "../WorkPurpose";
import WorkKeyword from "../WorkKeyword";
import WorkDetail from "../WorkDetail";
import WorkDeadLine from "../WorkDeadLine";
import WorkRef from "../WorkRef";
import WorkAddRequirement from "../WorkAddRequirement";
import WorkSubmit from "../WorkSubmit";
import WorkColor from "../WorkColor";
import WorkEtc from '../WorkEtc';

interface WorkspaceNumProtection {
  workspaceNum: number;
  isTagInputClicked: boolean;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
}

function switchFcn(
  workspaceNum: number,
  isTagInputClicked: boolean,
  textRef: RefObject<HTMLTextAreaElement>,
  tagRef: RefObject<HTMLInputElement>,
) {
  switch (workspaceNum) {
    case 1:
      return (
        <WorkTitle
        textRef={textRef}
        ></WorkTitle>
      );
    case 2:
      return (
        <WorkChoice
        ></WorkChoice>
      );
    case 3:
      return (
        <WorkDetail
          textRef={textRef}
        ></WorkDetail>
      );
    case 4:
      return (
        <WorkPurpose
        ></WorkPurpose>
      );
    case 5:
      return (
        <WorkKeyword
          isTagInputClicked={isTagInputClicked}
          tagRef={tagRef}
        ></WorkKeyword>
      );
    case 6:
      return (
        <WorkDeadLine
          textRef={textRef}
        ></WorkDeadLine>
      );
      case 7:
        return (
          <WorkColor
          ></WorkColor>
        );
    case 8:
      return (
        <WorkRef
        ></WorkRef>
      );
    case 9:
      return (
        <WorkEtc
          textRef={textRef}
        ></WorkEtc>
      );
    case 10:
      return (
        <WorkAddRequirement
          textRef={textRef}
        ></WorkAddRequirement>
      );
    case 11:
      return (
        <WorkSubmit
          textRef={textRef}
        ></WorkSubmit>
      );
  }
}

const WorkspaceRender = ({
  workspaceNum,
  isTagInputClicked,
  textRef,
  tagRef
}: WorkspaceNumProtection) => {
  return (
    <>
      {switchFcn(
        workspaceNum,
        isTagInputClicked,
        textRef,
        tagRef
      )}
    </>
  );
};

export default WorkspaceRender;
