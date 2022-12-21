import React from "react";
import styled from "styled-components";
import Chat from "../Chat";
import { IUserInfo } from "../../../apis/auth_login";
import { MenuType } from "../../../schemas/outsource";
import Todo from "../Todo";
import File from "../File";

interface IMaintContentProps {
  coworkingId: string;
  data: IUserInfo;
  proposalId: number;
  window: MenuType;
}

const MainContent = ({
  coworkingId,
  data,
  proposalId,
  window,
}: IMaintContentProps) => {
  /** window 값에 따른 컨텐츠 컴포넌트 리턴 함수 */
  const getContent = (() => {
    switch (window) {
      case "CHAT":
        return (
          <Chat coworkingId={coworkingId} data={data} proposalId={proposalId} />
        );
      case "TODO":
        return <Todo />;
      case "FILE":
        return <File />;
      default:
        return null;
    }
  })();
  return (
    <Container>
      <StepGuide>
        외주 제안서에 대한 질문사항을 확인한 뒤 NEXT STEP 버튼을 눌러주세요
      </StepGuide>
      {getContent}
    </Container>
  );
};

export default MainContent;

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
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
