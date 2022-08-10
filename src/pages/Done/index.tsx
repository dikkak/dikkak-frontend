import React from "react";
import styled from "styled-components";
import doneImg from "../../assets/workspaceImage/doneImg.svg";
import anotherlinkImg from "../../assets/workspaceImage/anotherlinkImg.svg";
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
} from "../../atoms";

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsContainer = styled.div`
  background: transparent;
  height: 240px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  height: 95px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  font-size: 20px;
  height: 40px;
  border: 0;
  color: #fff;
  margin-bottom: 15px;
  padding: 7px 0px;
  cursor: pointer;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  &:hover {
    opacity: 0.8;
  }
`;

const LinkCopyBtn = styled(Button)`
  background-color: ${(props) => props.theme.mainColor};
`;
const GotoClientBtn = styled(Button)`
  background-color: ${(props) => props.theme.subColor};
`;
const DoneImg = styled.img.attrs({
  src: doneImg,
})`
  width: 42px;
  height: 44px;
`;
const Description = styled.p`
  width: 100%;
  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  margin-bottom: 40px;
  margin-top: 10px;
  color: #717171;
  font-size: 30px;
`;

const LinkImg = styled.img.attrs({
  src: anotherlinkImg,
})`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

interface IDoneProps {
  proposalId: string;
}

const Done = ({ proposalId }: IDoneProps) => {
  const navigate = useNavigate();
  const copyUrl = () => {
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
        <DoneImg></DoneImg>
        <Description>제안서 작업이 완료되었습니다!</Description>
        <ButtonContainer>
          <LinkCopyBtn onClick={copyUrl}>
            링크 복사하기<LinkImg></LinkImg>
          </LinkCopyBtn>
          <GotoClientBtn
            onClick={() => {
              setAtomInit();
              navigate("/client_workspace1");
            }}
          >
            클라이언트 작업실로 돌아가기
          </GotoClientBtn>
        </ButtonContainer>
      </ContentsContainer>
    </BoxContainer>
  );
};

export default Done;
