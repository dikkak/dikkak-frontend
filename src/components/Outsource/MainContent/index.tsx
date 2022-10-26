import React from "react";
import styled from "styled-components";
import Chat from "../Chat";
import { IUserInfo } from "../../../apis/auth_login";

interface IMaintContentProps {
  coworkingId: string;
  data: IUserInfo;
  step: string;
}

const MainContent = ({ coworkingId, data, step }: IMaintContentProps) => {
  return (
    <Container>
      <StepGuide>
        외주 제안서에 대한 질문사항을 확인한 뒤 NEXT STEP 버튼을 눌러주세요
      </StepGuide>
      <Chat coworkingId={coworkingId} data={data} step={step} />
    </Container>
  );
};

export default MainContent;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 83%;
  height: 100%;
  padding: 12px;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
const StepGuide = styled.div`
  position: absolute;
  text-align: center;
  line-height: 28px;
  width: 95%;
  height: 28px;
  top: -28px;
  left: calc(5% - 24px);
  border-radius: 5px 5px 0 0;
  background-color: ${(props) => props.theme.mainColor};
  color: white;
`;
