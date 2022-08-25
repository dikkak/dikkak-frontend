import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import {
  deadLineAtom,
  isDoneAtom,
  isTagInputSubmittedAtom,
  keyWordListAtom,
  mainColorAtom,
  purposeMessageAtom,
  referenceContentsAtom,
  requestMessageAtom,
  subColorsAtom,
  titleMessageAtom,
  workChoiceAtom,
  workDetailAtom,
  workEtcAtom,
  workspaceNumAtom,
  workStepAtom,
} from "../../../atoms";
import Toast from "../../Toast";
import {
  BoxContainer,
  ButtonContainer,
  ContentsContainer,
  Description,
  DoneImg,
  GotoClientBtn,
  LinkCopyBtn,
  LinkImg,
} from "./styles";

interface IDoneProps {
  proposalId: string;
}

const Done = ({ proposalId }: IDoneProps) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const copyUrl = () => {
    setIsActive(true);
    navigator.clipboard.writeText(
      `http://localhost:3000/proposal/${proposalId}`
    ); // 개발서버 도메인
  };
  const resetTitle = useResetRecoilState(titleMessageAtom);
  const resetChoice = useResetRecoilState(workChoiceAtom);
  const resetDetail = useResetRecoilState(workDetailAtom);
  const resetPurpose = useResetRecoilState(purposeMessageAtom);
  const resetKeyword = useResetRecoilState(keyWordListAtom);
  const resetTagInput = useResetRecoilState(isTagInputSubmittedAtom);
  const resetDeadline = useResetRecoilState(deadLineAtom);
  const resetMainColor = useResetRecoilState(mainColorAtom);
  const resetSubcolors = useResetRecoilState(subColorsAtom);
  const resetReference = useResetRecoilState(referenceContentsAtom);
  const resetEtc = useResetRecoilState(workEtcAtom);
  const resetWorkspaceNum = useResetRecoilState(workspaceNumAtom);
  const resetRequest = useResetRecoilState(requestMessageAtom);
  const resetIsDone = useResetRecoilState(isDoneAtom);
  const resetWorkStep = useResetRecoilState(workStepAtom);
  const setAtomInit = () => {
    resetTitle();
    resetChoice();
    resetDetail();
    resetPurpose();
    resetKeyword();
    resetTagInput();
    resetDeadline();
    resetMainColor();
    resetSubcolors();
    resetReference();
    resetEtc();
    resetWorkspaceNum();
    resetRequest();
    resetIsDone();
    resetWorkStep();
  };
  return (
    <BoxContainer>
      <ContentsContainer>
        <DoneImg />
        <Description>제안서 작업이 완료되었습니다!</Description>
        <ButtonContainer>
          <LinkCopyBtn onClick={copyUrl}>
            링크 복사하기
            <LinkImg />
          </LinkCopyBtn>
          <GotoClientBtn
            onClick={() => {
              setAtomInit();
              navigate("/client_workspace");
            }}
          >
            클라이언트 작업실로 돌아가기
          </GotoClientBtn>
        </ButtonContainer>
        <Toast
          isActive={isActive}
          setIsActive={setIsActive}
          message={"링크 복사가 완료되었습니다!"}
        />
      </ContentsContainer>
    </BoxContainer>
  );
};

export default Done;
