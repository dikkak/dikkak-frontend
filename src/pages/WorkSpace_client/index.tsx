import React, { useEffect, useRef, useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Header,
  BackButton,
  Title,
  LogoImage,
  StoreBtn,
  Content,
  BlurPin,
  BlurBackground,
  Box,
  BoxContent,
  TextContainer,
  Text,
  SideTitle,
  TimeLine,
  Outer,
  InputArea,
  SubmitArea,
  SubmitButton,
  TitleTimeStep,
  WorkTimeStep,
  DetailTimeStep,
  PurposeTimeStep,
  KeyWordTimeStep,
  DeadLineTimeStep,
  ColorTimeStep,
  ReferenceTimeStep,
  EtcTimeStep,
  AdditionTimeStep,
  SubmitTimeStep,
  WholeBox,
  TagItem,
  TagText,
  Button,
  TagInput,
  TagBox,
  FileContainer,
  EtcFileContainer,
  TextOverlay,
} from "./styles";
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
      <Container>
        <Wrapper>
          <Header>
            <BackButton onClick={() => navigate(-1)}>
              <p>◀︎</p>
              <p>이전으로 돌아가기</p>
            </BackButton>
            <Title>
              <h1>제안서 작업실</h1>
              <LogoImage></LogoImage>
            </Title>
            <StoreBtn>저장하기</StoreBtn>
          </Header>
          <Content>
            <BlurBackground>
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <SideTitle>STEP</SideTitle>
              <TimeLine>
                <Outer>
                  <TitleTimeStep
                    onClick={() => {
                      setworkspaceNum(1);
                    }}
                    step={workStep.titleStep}
                  >
                    제목입력
                  </TitleTimeStep>
                  <WorkTimeStep
                    onClick={() => {
                      if (workStep.titleStep === "done") {
                        setworkspaceNum(2);
                      }
                    }}
                    step={workStep.workChoiceStep}
                  >
                    작업선택
                  </WorkTimeStep>
                  <DetailTimeStep
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
                  </DetailTimeStep>
                  <PurposeTimeStep
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
                  </PurposeTimeStep>
                  <KeyWordTimeStep
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
                  </KeyWordTimeStep>
                  <DeadLineTimeStep
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
                  </DeadLineTimeStep>
                  <ColorTimeStep
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
                  </ColorTimeStep>
                  <ReferenceTimeStep
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
                  </ReferenceTimeStep>
                  <EtcTimeStep
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
                  </EtcTimeStep>
                  <AdditionTimeStep
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
                  </AdditionTimeStep>
                  <SubmitTimeStep
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
                  </SubmitTimeStep>
                </Outer>
              </TimeLine>
            </BlurBackground>
            <Box>
              {!done ? (
                <BoxContent>
                  <WorkspaceRender
                    workspaceNum={workspaceNum}
                    tagRef={tagRef}
                    textRef={textRef}
                    setProposalId={setProposalId}
                  ></WorkspaceRender>
                  <TextContainer>
                    {(workspaceNum === 2 ||
                      workspaceNum === 3 ||
                      workspaceNum === 6 ||
                      workspaceNum === 7 ||
                      workspaceNum === 8 ||
                      workspaceNum === 9) && <TextOverlay></TextOverlay>}
                    <InputArea>
                      {workspaceNum === 5 ? (
                        <WholeBox>
                          <TagBox>
                            {inputList.map((keywordItem, index) => {
                              return (
                                <TagItem key={index}>
                                  <TagText>{keywordItem}</TagText>
                                  <Button onClick={deleteTagItem}>X</Button>
                                </TagItem>
                              );
                            })}
                            <TagInput
                              ref={tagRef}
                              type="text"
                              tabIndex={2}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => setTagItem(e.target.value)}
                              value={tagItem}
                              onKeyDown={onKeyPress}
                            />
                          </TagBox>
                        </WholeBox>
                      ) : (
                        <Text
                          ref={textRef}
                          onChange={onInputChange}
                          value={input}
                        />
                      )}
                    </InputArea>
                    <SubmitArea>
                      <SubmitButton onClick={() => onSubmit(workspaceNum)}>
                        전송하기
                      </SubmitButton>
                      {/* <EditButton onClick={() => onEdit(workspaceNum)}>
                        수정하기
                      </EditButton> */}
                    </SubmitArea>
                  </TextContainer>
                </BoxContent>
              ) : (
                <Done proposalId={proposalId}></Done>
              )}
            </Box>
            <BlurBackground>
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <SideTitle>FILE</SideTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  top: "10px",
                  height: "75%",
                  // overflowY: "scroll",
                  // overflowX: "hidden",
                }}
              >
                {refFileRenderFnc() ? (
                  <FileContainer>
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
                      referenceContents.map((item) => {
                        return item.imgName !== "" ? (
                          <li>{item.imgName.slice(0, 19)}</li>
                        ) : null;
                      })}
                  </FileContainer>
                ) : null}
                {etcFileRenderFnc() ? (
                  <EtcFileContainer>
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
                      workEtc.map((item) => {
                        return item.fileName !== "" ? (
                          <li>{item.fileName.slice(0, 19)}</li>
                        ) : null;
                      })}
                  </EtcFileContainer>
                ) : null}
              </div>
            </BlurBackground>
          </Content>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
      <NavigationGuard when={navigateGuard} />
    </>
  );
};

export default WorkSpaceClient;
