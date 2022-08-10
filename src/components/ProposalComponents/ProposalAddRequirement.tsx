import React from "react";
import { Circle, ClientMessage, SystemMessage, WorkTitle } from "./styles";

interface IProposalAddRequirementProps {
  requestMessage: string | undefined;
  additionalRef: React.RefObject<HTMLHeadingElement>;
}

const ProposalAddRequirement = ({
  requestMessage,
  additionalRef,
}: IProposalAddRequirementProps) => {
  return (
    <>
      <WorkTitle ref={additionalRef} id="additional">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        추가 요청 사항(선택)
      </WorkTitle>
      <SystemMessage width="248px">
        그외 추가 요청사항을 작성해주세요
      </SystemMessage>
      <ClientMessage>{requestMessage}</ClientMessage>
      <div style={{ paddingBottom: "90px" }}></div>
    </>
  );
};

export default ProposalAddRequirement;
