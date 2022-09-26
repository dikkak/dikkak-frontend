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
import * as S from "./styles";

interface IDoneProps {
  proposalId: string;
}

const Done = ({ proposalId }: IDoneProps) => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const copyUrl = () => {
    setIsActive(true);
    navigator.clipboard.writeText(
      process.env.NODE_ENV === "production"
        ? `https://www.98o7.com/proposal/${proposalId}`
        : `https://dev.98o7.com/proposal/${proposalId}`
    );
    // `http://localhost:3000/proposal/${proposalId}`
    // 개발서버 도메인
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
    <S.BoxContainer>
      <S.ContentsContainer>
        <S.DoneImg />
        <S.Description>제안서 작업이 완료되었습니다!</S.Description>
        <S.ButtonContainer>
          <S.LinkCopyBtn onClick={copyUrl}>
            <p>1</p>
            <div
              style={{
                justifySelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>링크 복사하기</p>
              <S.LinkImg />
            </div>
          </S.LinkCopyBtn>
          <S.EstimateBtn
            as="a"
            onClick={() =>
              window.open(
                "https://di-kkak.notion.site/11556fcf5dc740168e1fb6c974d0714a",
                "_blank"
              )
            }
          >
            <p>2</p>
            <p style={{ justifySelf: "center" }}>예상 견적 살펴보기</p>
          </S.EstimateBtn>
          <S.RequestBtn
            as="a"
            onClick={() =>
              window.open(
                "https://dikkakbot.channel.io/support-bots/48169",
                "_blank"
              )
            }
          >
            <p>3</p>
            <p style={{ justifySelf: "center" }}>디자인 의뢰하기</p>
          </S.RequestBtn>
          <S.GotoClientBtn
            onClick={() => {
              setAtomInit();
              navigate("/client_workspace");
            }}
          >
            <p>4</p>
            <p style={{ justifySelf: "center" }}>작업실로 돌아가기</p>
          </S.GotoClientBtn>
        </S.ButtonContainer>
        <Toast
          isActive={isActive}
          setIsActive={setIsActive}
          message={"링크 복사가 완료되었습니다!"}
        />
      </S.ContentsContainer>
    </S.BoxContainer>
  );
};

export default Done;
