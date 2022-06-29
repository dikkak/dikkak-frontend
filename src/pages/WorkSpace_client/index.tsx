import React, { useRef, useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
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
} from "./styles";
import WorkspaceRender from "../../components/WorkspaceRender";

const WorkSpaceClient = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
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

  const onFileClick = () => {
    fileRef.current?.click();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onSubmit = () => {
    if (input === "") return;
    setMessage(input);
    setInput("");
    textRef.current?.setAttribute(
      "placeholder",
      "수정하려면 수정하기 버튼을 누르세요"
    );
    textRef.current?.setAttribute("disabled", "disabled");
  };

  const onEdit = () => {
    textRef.current?.removeAttribute("disabled");
    textRef.current?.setAttribute("placeholder", "제목을 입력하세요");
    textRef.current?.focus();
  };

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
                      setworkspaceNum(2);
                    }}
                    step={workStep}
                  >
                    작업선택
                  </WorkTimeStep>
                  <DetailTimeStep
                    onClick={() => {
                      setworkspaceNum(3);
                    }}
                    step={detailStep}
                  >
                    세부사항
                    <br />
                    선택
                  </DetailTimeStep>
                  <PurposeTimeStep
                    onClick={() => {
                      setworkspaceNum(4);
                    }}
                    step={purposeStep}
                  >
                    사용목적
                  </PurposeTimeStep>
                  <KeyWordTimeStep
                    onClick={() => {
                      setworkspaceNum(5);
                    }}
                    step={keyWordStep}
                  >
                    키워드
                    <br />
                    선택
                  </KeyWordTimeStep>
                  <DeadLineTimeStep
                    onClick={() => {
                      setworkspaceNum(6);
                    }}
                    step={deadLineStep}
                  >
                    마감기간
                    <br />
                    선택
                  </DeadLineTimeStep>
                  <ColorTimeStep
                    onClick={() => {
                      setworkspaceNum(7);
                    }}
                    step={colorStep}
                  >
                    컬러선택
                  </ColorTimeStep>
                  <ReferenceTimeStep
                    onClick={() => {
                      setworkspaceNum(8);
                    }}
                    step={referenceStep}
                  >
                    레퍼런스
                    <br />
                    등록
                  </ReferenceTimeStep>
                  <EtcTimeStep
                    onClick={() => {
                      setworkspaceNum(9);
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
                      setworkspaceNum(10);
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
                      setworkspaceNum(11);
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
                    <Text
                      ref={textRef}
                      onChange={onInputChange}
                      value={input}
                    />
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
                    <SubmitButton onClick={onSubmit}>전송하기</SubmitButton>
                    <EditButton onClick={onEdit}>수정하기</EditButton>
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
