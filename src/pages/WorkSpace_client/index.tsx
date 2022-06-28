import React, { useRef, useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import WorkTitle from "../../components/WorkTitle";
import { useLocation } from "react-router-dom";
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
  TimeStep,
  Outer,
  InputArea,
  FileButton,
  AdditionalButtons,
  EmojiButton,
  SubmitArea,
  SubmitButton,
  EditButton,
} from "./styles";
import WorkspaceRender from "../../components/WorkspaceRender";

const WorkSpaceClient = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [workspaceNum, setworkspaceNum] = useState(1);

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
  let { pathname } = useLocation();

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
                  <TimeStep step="now">제목입력</TimeStep>
                  <TimeStep step="yet">작업선택</TimeStep>
                  <TimeStep step="yet">
                    세부사항
                    <br />
                    선택
                  </TimeStep>
                  <TimeStep step="yet">사용목적</TimeStep>
                  <TimeStep step="yet">
                    키워드
                    <br />
                    선택
                  </TimeStep>
                  <TimeStep step="yet">
                    마감기간
                    <br />
                    선택
                  </TimeStep>
                  <TimeStep step="yet">컬러선택</TimeStep>
                  <TimeStep step="yet">
                    레퍼런스
                    <br />
                    등록
                  </TimeStep>
                  <TimeStep step="yet">
                    기타 파일
                    <br />
                    업로드{" "}
                    <p style={{ display: "inline", fontSize: "10px" }}>
                      (선택)
                    </p>
                  </TimeStep>
                  <TimeStep step="yet">
                    추가요청
                    <br />
                    사항{" "}
                    <p style={{ display: "inline", fontSize: "10px" }}>
                      (선택)
                    </p>
                  </TimeStep>
                  <TimeStep step="yet">제출하기</TimeStep>
                </Outer>
              </TimeLine>
            </BlurBackground>
            <Box>
              <BoxContent>
                <WorkspaceRender
                  workspaceNum={workspaceNum}
                  message={message}
                  setworkspaceNum={setworkspaceNum}
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
