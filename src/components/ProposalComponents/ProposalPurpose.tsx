import React from "react";
import styled from "styled-components";
import {
  Circle,
  ClientMessage,
  Line,
  SystemMessage,
  WorkTitle,
} from "./styles";

interface IProposalPurposeProps {
  purpose: string | undefined;
  purposeRef: React.RefObject<HTMLHeadingElement>;
}

const ProposalPurpose = ({ purpose, purposeRef }: IProposalPurposeProps) => {
  return (
    <>
      <WorkTitle ref={purposeRef} id="purpose">
        <Circle
          color="#905DFB"
          style={{ display: "inline-block", marginRight: "5px" }}
        />
        사용 목적
      </WorkTitle>
      <SystemMessage width="200px" style={{ marginBottom: "10px" }}>
        디자인의 용도는 무엇인가요
      </SystemMessage>
      <SystemMessage2>
        작업선택/세부사항 선택 STEP에서 '기타'를 선택한 경우 해당 내용을
        입력해주세요
      </SystemMessage2>
      <ClientMessage>{purpose}</ClientMessage>
      <Line>
        <hr />
      </Line>
    </>
  );
};

export default ProposalPurpose;

const SystemMessage2 = styled(ClientMessage)`
  color: ${(props) => props.theme.mainColor};
  margin-bottom: 15px;
  &::before {
    right: 0;
    left: -11px;
    border-width: 8px 11px 8px 0;
  }
  &::after {
    border-width: 8px 11px 8px 0;
    right: 0;
    left: -9px;
  }
`;
