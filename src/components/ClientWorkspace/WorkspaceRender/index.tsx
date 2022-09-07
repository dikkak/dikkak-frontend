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
import WorkEtc from "../WorkEtc";

interface WorkspaceNumProtection {
  workspaceNum: number;
  textRef: RefObject<HTMLTextAreaElement>;
  tagRef: RefObject<HTMLInputElement>;
  setProposalId: React.Dispatch<React.SetStateAction<string>>;
}

function switchFcn(
  workspaceNum: number,
  textRef: RefObject<HTMLTextAreaElement>,
  tagRef: RefObject<HTMLInputElement>,
  setProposalId: React.Dispatch<React.SetStateAction<string>>
) {
  switch (workspaceNum) {
    case 1:
      return <WorkTitle textRef={textRef}></WorkTitle>;
    case 2:
      return <WorkChoice textRef={textRef}></WorkChoice>;
    case 3:
      return <WorkDetail textRef={textRef}></WorkDetail>;
    case 4:
      return <WorkPurpose textRef={textRef}></WorkPurpose>;
    case 5:
      return <WorkKeyword tagRef={tagRef}></WorkKeyword>;
    case 6:
      return <WorkDeadLine textRef={textRef}></WorkDeadLine>;
    case 7:
      return <WorkColor textRef={textRef}></WorkColor>;
    case 8:
      return <WorkRef textRef={textRef}></WorkRef>;
    case 9:
      return <WorkEtc textRef={textRef}></WorkEtc>;
    case 10:
      return <WorkAddRequirement textRef={textRef}></WorkAddRequirement>;
    case 11:
      return (
        <WorkSubmit
          textRef={textRef}
          setProposalId={setProposalId}
        ></WorkSubmit>
      );
  }
}

const WorkspaceRender = ({
  workspaceNum,
  textRef,
  tagRef,
  setProposalId,
}: WorkspaceNumProtection) => {
  return <>{switchFcn(workspaceNum, textRef, tagRef, setProposalId)}</>;
};

export default WorkspaceRender;
