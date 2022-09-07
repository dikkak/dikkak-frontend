import React from "react";
import {
  Circle,
  ClientMessage,
  Line,
  SystemMessage,
  WorkTitle,
} from "./styles";

interface IProposalTitleProps {
  title: string | undefined;
  titleRef: React.RefObject<HTMLHeadingElement>;
}
const ProposalTitle = ({ title, titleRef }: IProposalTitleProps) => {
  return (
    <>
      <WorkTitle ref={titleRef} id="title">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        제목 입력
      </WorkTitle>
      <SystemMessage width="215px">제안서의 제목을 입력해 주세요</SystemMessage>
      <ClientMessage>{title}</ClientMessage>
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalTitle;
