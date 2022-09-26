import React, { useEffect, useRef, useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import * as S from "./styles";
import WorkspaceRender from "../../components/ClientWorkspace/WorkspaceRender";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isDoneAtom,
  keyWordListAtom,
  purposeMessageAtom,
  requestMessageAtom,
  titleMessageAtom,
  workChoiceAtom,
  workspaceNumAtom,
  workStepAtom,
  workEtcAtom,
  referenceContentsAtom,
  isTagInputSubmittedAtom,
} from "../../atoms";
import NavigationGuard from "../../components/NavigationGuard/NavigationGuard";
import Done from "../../components/ClientWorkspace/Done";

const WorkSpaceClient = () => {
  const { data, isFetching } = useQuery("user-info", userInfo);
  const navigate = useNavigate();
  const [navigateGuard, setNavigateGuard] = useState(true);
  const [proposalId, setProposalId] = useState("");
  const [input, setInput] = useState("");
  const setTitleMessage = useSetRecoilState(titleMessageAtom);
  const workChoice = useRecoilValue(workChoiceAtom);
  const setPurposeMessage = useSetRecoilState(purposeMessageAtom);
  const setIsTagInputSubmitted = useSetRecoilState(isTagInputSubmittedAtom);
  const referenceContents = useRecoilValue(referenceContentsAtom);
  const workEtc = useRecoilValue(workEtcAtom);

  const setRequestMessage = useSetRecoilState(requestMessageAtom);
  const done = useRecoilValue(isDoneAtom);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const [workspaceNum, setworkspaceNum] = useRecoilState(workspaceNumAtom);
  const workStep = useRecoilValue(workStepAtom);
  const [fileClickState, setFileClickState] = useState(false);
  const [etcClickState, setEtcClickState] = useState(false);

  //
  // Tag
  const [tagItem, setTagItem] = useState("");
  const setKeywordList = useSetRecoilState(keyWordListAtom);
  const [inputList, setInputList] = useState<string[]>([]);
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.currentTarget.value.length !== 0 &&
      e.key === "Enter" &&
      e.nativeEvent.isComposing === false
    ) {
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    if (inputList.filter((input) => input === tagItem).length > 0) {
      return;
    }
    setInputList((prev) => [...prev, tagItem]);
    setTagItem("");
  };
  const deleteTagItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteTagItem = (
      e.currentTarget.parentElement?.firstChild as HTMLSpanElement
    ).innerText;
    const filteredKeywordList = inputList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setInputList(filteredKeywordList);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (step: number) => {
    if (step !== 1 && step !== 4 && step !== 5 && step !== 10) return;
    switch (step) {
      case 1:
        setTitleMessage(input);
        break;
      case 4:
        setPurposeMessage(input);
        break;
      case 5:
        setIsTagInputSubmitted(true);
        setKeywordList(inputList);
        break;
      case 10:
        setRequestMessage(input);
        break;
      default:
        break;
    }
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.currentTarget.value.length !== 0 &&
      e.key === "Enter" &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();
      onSubmit(workspaceNum);
    }
  };

  const refFileRenderFnc = () => {
    const trueOrFalse = referenceContents.find((item) => item.imgName !== "");
    return trueOrFalse ? true : false;
  };

  const etcFileRenderFnc = () => {
    const trueOrFalse = workEtc.find((item) => item.fileName !== "");
    return trueOrFalse ? true : false;
  };
  useEffect(() => {
    if (done) {
      setNavigateGuard(false);
    }
  }, [done]);
  if (!isFetching && !data) {
    return <Navigate to="/login" />;
  }
  if (!isFetching && data && data.type === "DESIGNER") {
    return <Navigate to="/service_start" />;
  }
  return (
    <>
      <Menu />
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <S.BackButton onClick={() => navigate(-1)}>
              <p>◀︎</p>
              <p>이전으로 돌아가기</p>
            </S.BackButton>
            <S.Title>
              <h1>제안서 작업실</h1>
              <S.LogoImage></S.LogoImage>
            </S.Title>
          </S.Header>
          <S.Content>
            <S.BlurBackground>
              <S.BlurPin />
              <S.BlurPin />
              <S.BlurPin />
              <S.BlurPin />
              <S.SideTitle>STEP</S.SideTitle>
              <S.TimeLine>
                <S.Outer>
                  <S.TitleTimeStep
                    onClick={() => {
                      setworkspaceNum(1);
                    }}
                    step={workStep.titleStep}
                  >
                    제목입력
                  </S.TitleTimeStep>
                  <S.WorkTimeStep
                    onClick={() => {
                      if (workStep.titleStep === "done") {
                        setworkspaceNum(2);
                      }
                    }}
                    step={workStep.workChoiceStep}
                  >
                    작업선택
                  </S.WorkTimeStep>
                  <S.DetailTimeStep
                    onClick={() => {
                      if (workChoice.OTHER) setworkspaceNum(4);
                      else if (
                        workStep.titleStep &&
                        workStep.workChoiceStep === "done"
                      ) {
                        setworkspaceNum(3);
                      }
                    }}
                    step={workStep.detailStep}
                  >
                    세부사항
                    <br />
                    선택
                  </S.DetailTimeStep>
                  <S.PurposeTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep === "done"
                      ) {
                        setworkspaceNum(4);
                      }
                    }}
                    step={workStep.purposeStep}
                  >
                    사용목적
                  </S.PurposeTimeStep>
                  <S.KeyWordTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep === "done"
                      ) {
                        setworkspaceNum(5);
                      }
                    }}
                    step={workStep.keyWordStep}
                  >
                    키워드
                    <br />
                    선택
                  </S.KeyWordTimeStep>
                  <S.DeadLineTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep &&
                        workStep.keyWordStep === "done"
                      ) {
                        setworkspaceNum(6);
                      }
                    }}
                    step={workStep.deadLineStep}
                  >
                    마감기간
                    <br />
                    선택
                  </S.DeadLineTimeStep>
                  <S.ColorTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep &&
                        workStep.keyWordStep &&
                        workStep.deadLineStep === "done"
                      ) {
                        setworkspaceNum(7);
                      }
                    }}
                    step={workStep.colorStep}
                  >
                    컬러선택
                  </S.ColorTimeStep>
                  <S.ReferenceTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep &&
                        workStep.keyWordStep &&
                        workStep.deadLineStep &&
                        workStep.colorStep === "done"
                      ) {
                        setworkspaceNum(8);
                      }
                    }}
                    step={workStep.referenceStep}
                  >
                    레퍼런스
                    <br />
                    등록
                  </S.ReferenceTimeStep>
                  <S.EtcTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep &&
                        workStep.keyWordStep &&
                        workStep.deadLineStep &&
                        workStep.colorStep &&
                        workStep.referenceStep === "done"
                      ) {
                        setworkspaceNum(9);
                      }
                    }}
                    step={workStep.etcStep}
                  >
                    기타 파일
                    <br />
                    업로드{" "}
                    <p style={{ display: "inline", fontSize: "10px" }}>
                      (선택)
                    </p>
                  </S.EtcTimeStep>
                  <S.AdditionTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep &&
                        workStep.keyWordStep &&
                        workStep.deadLineStep &&
                        workStep.colorStep &&
                        workStep.referenceStep &&
                        workStep.etcStep === "done"
                      ) {
                        setworkspaceNum(10);
                      }
                    }}
                    step={workStep.additionStep}
                  >
                    추가요청
                    <br />
                    사항{" "}
                    <p style={{ display: "inline", fontSize: "10px" }}>
                      (선택)
                    </p>
                  </S.AdditionTimeStep>
                  <S.SubmitTimeStep
                    onClick={() => {
                      if (
                        workStep.titleStep &&
                        workStep.workChoiceStep &&
                        workStep.detailStep &&
                        workStep.purposeStep &&
                        workStep.keyWordStep &&
                        workStep.deadLineStep &&
                        workStep.colorStep &&
                        workStep.referenceStep &&
                        workStep.etcStep &&
                        workStep.additionStep === "done"
                      ) {
                        setworkspaceNum(11);
                      }
                    }}
                    step={workStep.submitStep}
                  >
                    제출하기
                  </S.SubmitTimeStep>
                </S.Outer>
              </S.TimeLine>
            </S.BlurBackground>
            <S.Box>
              {!done ? (
                <S.BoxContent>
                  <WorkspaceRender
                    workspaceNum={workspaceNum}
                    tagRef={tagRef}
                    textRef={textRef}
                    setProposalId={setProposalId}
                  ></WorkspaceRender>
                  <S.TextContainer>
                    {(workspaceNum === 2 ||
                      workspaceNum === 3 ||
                      workspaceNum === 6 ||
                      workspaceNum === 7 ||
                      workspaceNum === 8 ||
                      workspaceNum === 9 ||
                      workspaceNum === 11) && <S.TextOverlay></S.TextOverlay>}
                    <S.InputArea>
                      {workspaceNum === 5 ? (
                        <S.WholeBox
                          onClick={() => {
                            tagRef.current?.focus();
                          }}
                        >
                          <S.TagBox>
                            {inputList.map((keywordItem, index) => {
                              return (
                                <S.TagItem key={index}>
                                  <S.TagText>{keywordItem}</S.TagText>
                                  <S.Button onClick={deleteTagItem}>X</S.Button>
                                </S.TagItem>
                              );
                            })}
                            <S.TagInput
                              ref={tagRef}
                              type="text"
                              tabIndex={2}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => setTagItem(e.target.value)}
                              value={tagItem}
                              onKeyDown={onKeyPress}
                            />
                          </S.TagBox>
                        </S.WholeBox>
                      ) : (
                        <S.Text
                          ref={textRef}
                          onKeyDown={onKeyDown}
                          onChange={onInputChange}
                          value={input}
                        />
                      )}
                    </S.InputArea>
                    <S.SubmitArea>
                      <S.SubmitButton onClick={() => onSubmit(workspaceNum)}>
                        전송하기
                      </S.SubmitButton>
                    </S.SubmitArea>
                  </S.TextContainer>
                </S.BoxContent>
              ) : (
                <Done proposalId={proposalId}></Done>
              )}
            </S.Box>
            <S.BlurBackground>
              <S.BlurPin />
              <S.BlurPin />
              <S.BlurPin />
              <S.BlurPin />
              <S.SideTitle>FILE</S.SideTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  top: "10px",
                  height: "75%",
                }}
              >
                {refFileRenderFnc() ? (
                  <S.FileContainer>
                    <h3
                      onClick={() => {
                        setFileClickState((prev) => !prev);
                      }}
                    >
                      레퍼런스
                      <br />
                      등록
                    </h3>
                    {fileClickState &&
                      referenceContents.map((item, index) => {
                        return item.imgName !== "" ? (
                          <li key={index}>
                            <S.FileName>{item.imgName}</S.FileName>
                          </li>
                        ) : null;
                      })}
                  </S.FileContainer>
                ) : null}
                {etcFileRenderFnc() ? (
                  <S.EtcFileContainer>
                    <h3
                      onClick={() => {
                        setEtcClickState((prev) => !prev);
                      }}
                    >
                      기타 파일
                      <br />
                      업로드(선택)
                    </h3>
                    {etcClickState &&
                      workEtc.map((item, index) => {
                        return item.fileName !== "" ? (
                          <li key={index}>
                            <S.FileName>{item.fileName}</S.FileName>
                          </li>
                        ) : null;
                      })}
                  </S.EtcFileContainer>
                ) : null}
              </div>
            </S.BlurBackground>
          </S.Content>
        </S.Wrapper>
      </S.Container>
      <Footer bgColor="#fff"></Footer>
      <NavigationGuard when={navigateGuard} />
    </>
  );
};

export default WorkSpaceClient;
