import React, { useRef, useState } from "react";
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
  FileButton,
  AdditionalButtons,
  EmojiButton,
  SubmitArea,
  SubmitButton,
  EditButton,
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
} from "./styles";
import WorkspaceRender from "../../components/WorkspaceRender";
import { useQuery } from 'react-query';
import { userInfo } from '../../apis/auth_login';

export interface IColor {
  color: string;
  isClicked: boolean;
}

const WorkSpaceClient = () => {
  const {data} = useQuery('user-info', userInfo);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string>("");
  const [purposeMessage, setPurposeMessage] = useState<string>("");
  const [isTagInputClicked, setIsTagInputClicked] = useState(false);
  const [deadLine, setDeadLine] = useState<string | undefined>(); //마감기간의 state
  const [mainColor, setMainColor] = useState<IColor>({
    color: '',
    isClicked: false
  });
  const [subColors, setSubColors] = useState<IColor[]>([
    {
      color: '',
      isClicked: false
    },
    {
      color: '',
      isClicked: false
    },
  ]); // colorStep의 메인컬러와 서브컬러 state
  const fileRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const [workspaceNum, setworkspaceNum] = useState(1);

  // TimeStep 상태
  const [titleStep, setTitleStep] = useState("now");
  const [workStep, setWorkStep] = useState("yet");
  const [detailStep, setDetailStep] = useState("yet");
  const [purposeStep, setPurposeStep] = useState("yet");
  const [keyWordStep, setKeyWordStep] = useState("yet");
  const [deadLineStep, setDeadLineStep] = useState("yet");
  const [colorStep, setColorStep] = useState("yet");
  const [referenceStep, setReferenceStep] = useState("yet");
  const [etcStep, setEtcStep] = useState("yet");
  const [additionStep, setAdditionStep] = useState("yet");
  const [submitStep, setSubmitStep] = useState("yet");
  //
  // Tag
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
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
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };
  const deleteTagItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteTagItem = (
      e.currentTarget.parentElement?.firstChild as HTMLSpanElement
    ).innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };
  //
  const onFileClick = () => {
    fileRef.current?.click();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = (step: number) => {
    if (step !== 1 && step !== 4 && step !== 5 && step !== 10) return;
    switch (step) {
      case 1:
        setMessage(input);
        break;
      case 4:
        setPurposeMessage(input);
        break;
      case 5:
        setIsTagInputClicked(true);
        tagRef.current?.setAttribute("disabled", "disabled");
        break;
      default:
        break;
    }
    setInput("");
    tagRef.current?.setAttribute(
      "placeholder",
      "수정하려면 수정하기 버튼을 누르세요"
    );
    textRef.current?.setAttribute(
      "placeholder",
      "수정하려면 수정하기 버튼을 누르세요"
    );
    textRef.current?.setAttribute("disabled", "disabled");
  };

  const onEdit = (step: number) => {
    if (step !== 1 && step !== 4 && step !== 5 && step !== 10) return;
    tagRef.current?.removeAttribute("disabled");
    textRef.current?.removeAttribute("disabled");
    switch (step) {
      case 1:
        textRef.current?.setAttribute("placeholder", "제목을 입력하세요");
        break;
      case 4:
        textRef.current?.setAttribute(
          "placeholder",
          "디자인의 용도를 입력하세요"
        );
        break;
      case 5:
        tagRef.current?.setAttribute("placeholder", "키워드를 입력하세요");
        break;
      default:
        break;
    }
    textRef.current?.focus();
  };
  if(!data) {return <Navigate replace to='/login'/>}
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
                    step={titleStep}
                  >
                    제목입력
                  </TitleTimeStep>
                  <WorkTimeStep
                    onClick={() => {
                      if (titleStep === "done") {
                        setworkspaceNum(2);
                      }
                    }}
                    step={workStep}
                  >
                    작업선택
                  </WorkTimeStep>
                  <DetailTimeStep
                    onClick={() => {
                      if (titleStep && workStep === "done") {
                        setworkspaceNum(3);
                      }
                    }}
                    step={detailStep}
                  >
                    세부사항
                    <br />
                    선택
                  </DetailTimeStep>
                  <PurposeTimeStep
                    onClick={() => {
                      if (titleStep && workStep && detailStep === "done") {
                        setworkspaceNum(4);
                      }
                    }}
                    step={purposeStep}
                  >
                    사용목적
                  </PurposeTimeStep>
                  <KeyWordTimeStep
                    onClick={() => {
                      if (
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep === "done"
                      ) {
                        setworkspaceNum(5);
                      }
                    }}
                    step={keyWordStep}
                  >
                    키워드
                    <br />
                    선택
                  </KeyWordTimeStep>
                  <DeadLineTimeStep
                    onClick={() => {
                      if (
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep &&
                        keyWordStep === "done"
                      ) {
                        setworkspaceNum(6);
                      }
                    }}
                    step={deadLineStep}
                  >
                    마감기간
                    <br />
                    선택
                  </DeadLineTimeStep>
                  <ColorTimeStep
                    onClick={() => {
                      if (
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep &&
                        keyWordStep &&
                        deadLineStep === "done"
                      ) {
                        setworkspaceNum(7);
                      }
                    }}
                    step={colorStep}
                  >
                    컬러선택
                  </ColorTimeStep>
                  <ReferenceTimeStep
                    onClick={() => {
                      if (
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep &&
                        keyWordStep &&
                        deadLineStep === "done"
                      ) {
                        setworkspaceNum(8);
                      }
                    }}
                    step={referenceStep}
                  >
                    레퍼런스
                    <br />
                    등록
                  </ReferenceTimeStep>
                  <EtcTimeStep
                    onClick={() => {
                      if (
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep &&
                        keyWordStep &&
                        deadLineStep &&
                        colorStep &&
                        referenceStep === "done"
                      ) {
                        setworkspaceNum(9);
                      }
                    }}
                    step={etcStep}
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
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep &&
                        keyWordStep &&
                        deadLineStep &&
                        colorStep &&
                        referenceStep &&
                        etcStep === "done"
                      ) {
                        setworkspaceNum(10);
                      }
                    }}
                    step={additionStep}
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
                        titleStep &&
                        workStep &&
                        detailStep &&
                        purposeStep &&
                        keyWordStep &&
                        deadLineStep &&
                        colorStep &&
                        referenceStep &&
                        etcStep &&
                        additionStep === "done"
                      ) {
                        setworkspaceNum(11);
                      }
                    }}
                    step={submitStep}
                  >
                    제출하기
                  </SubmitTimeStep>
                </Outer>
              </TimeLine>
            </BlurBackground>
            <Box>
              <BoxContent>
                <WorkspaceRender
                  workspaceNum={workspaceNum}
                  message={message}
                  tagList={tagList}
                  isTagInputClicked={isTagInputClicked}
                  purposeMessage={purposeMessage}
                  deadLine={deadLine} // 마감기간 state
                  setDeadLine={setDeadLine} // 마감기간 state의 set함수
                  mainColor={mainColor}
                  setMainColor={setMainColor}
                  subColors={subColors}
                  setSubColors={setSubColors}
                  tagRef={tagRef}
                  textRef={textRef}
                  setworkspaceNum={setworkspaceNum}
                  titleStep={setTitleStep}
                  workStep={setWorkStep}
                  detailStep={setDetailStep}
                  purposeStep={setPurposeStep}
                  keyWordStep={setKeyWordStep}
                  deadLineStep={setDeadLineStep}
                  colorStep={setColorStep}
                  referenceStep={setReferenceStep}
                  etcStep={setEtcStep}
                  additionStep={setAdditionStep}
                  submitStep={setSubmitStep}
                ></WorkspaceRender>
                <TextContainer>
                  <InputArea>
                    {keyWordStep === "now" && workspaceNum === 5 ? (
                      <WholeBox>
                        <TagBox>
                          {tagList.map((tagItem, index) => {
                            return (
                              <TagItem key={index}>
                                <TagText>{tagItem}</TagText>
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
                    <AdditionalButtons>
                      <FileButton onClick={onFileClick} />
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                      />
                      <EmojiButton />
                    </AdditionalButtons>
                  </InputArea>
                  <SubmitArea>
                    <SubmitButton onClick={() => onSubmit(workspaceNum)}>
                      전송하기
                    </SubmitButton>
                    <EditButton onClick={() => onEdit(workspaceNum)}>
                      수정하기
                    </EditButton>
                  </SubmitArea>
                </TextContainer>
              </BoxContent>
            </Box>
            <BlurBackground>
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <SideTitle>FILE</SideTitle>
            </BlurBackground>
          </Content>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default WorkSpaceClient;
