import React, { useRef, useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logoImage/logoBasic.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import fileImg from '../../assets/workspaceImage/fileImg.svg';
import emojiImg from '../../assets/workspaceImage/emojiImg.svg';

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 82px;
  height: auto;
`;

const Wrapper = styled.div`
  max-width: 1178px;
  min-width: 960px;
  height: 650px;
  margin: 0 auto;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  margin-bottom: 30px;
`;

const BackButton = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;
  height: 30px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: white;
  }
`;

const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  line-height: 20px;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
  }
`;

const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 0.7em;
  width: 30px;
  height: 30px;
`;

const StoreBtn = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;
  color: #fff;
  height: 30px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: space-between;
`;

const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));

  &:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  &:nth-child(2) {
    top: 10px;
    right: 10px;
  }

  &:nth-child(3) {
    bottom: 10px;
    left: 10px;
  }
  &:nth-child(4) {
    bottom: 10px;
    right: 10px;
  }
`;

const BlurBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 170px;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(30px);
  /* border: 1px solid #000; */
  border-radius: 5px;
  background-color: #fafafa;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  /* &:first-child {
    margin-right: 5rem;
  } */
`;

const Box = styled.div`
  width: 774px;
  height: 100%;
  /* margin-right: 76px; */
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: transparent;
`;

const StepTitle = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  color: #329a29;
  h3 {
    color: ${(props) => props.theme.subColor};
    &::before {
      background: ${(props) => props.theme.mainColor};
      border: 3px solid ${(props) => props.theme.mainColor};
    }
  }
`;
const Step = styled.h3`
  color: black;
  position: relative;
  width: 100%;
  margin: 0 0 0 30px;
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    left: -24.5px;
  }
`;

const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 333px;
  background-color: transparent;
  margin-bottom: 20px;
`;
const SystemMessage = styled.p`
  height: 35px;
  width: 215px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding-right: 10px;
  &::before {
    content: "";
    position: relative;
    background-color: transparent;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 0px solid transparent;
    border-right: 15px solid ${(props) => props.theme.mainColor};
    left: -10.5px;
  }
`;

const ClientMessage = styled.p`
  position: relative;
  right: -45px;
  height: 35px;
  width: 679px;
  background-color: white;
  color: #717171;
  display: flex;
  justify-content: right;
  align-items: center;
  border: 1px solid ${props => props.theme.mainColor};
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 25px;
  padding-right: 20px;
  &::before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #905DFB;
    display: block;
    width: 0;
    z-index: 0;
    right: -14px;
    top: 9px;
  }
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 8px 0 8px 13px;
    border-color: transparent #FFFFFF;
    display: block;
    width: 0;
    z-index: 1;
    right: -12px;
    top: 9px;
  }
`;
const NextStepButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
  height: 30px;
  background-color: #717171;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Circle = styled.div<{color: string}>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 195px;
  background: rgba(240, 240, 240, 0.5);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 15px;
`;

const Text = styled.textarea.attrs({
  placeholder: "제목을 입력하세요",
})`
  width: 533px;
  height: 100px;
  background: transparent;
  padding: 3px;
  border: 0;
  margin: 25px 0 0 25px;
  font-family: Inter;
  border-radius: 15px;
  outline: none;
  resize: none;
  color: #717171;
  &:focus {
    outline: none;
  }
`;
const SideTitle = styled.h1`
  position: absolute;
  top: 40px;
  font-size: 28px;
  margin-bottom: 30px;
  color: #717171;
`;
const TimeLine = styled.div`
  width: 55%;
  margin: 50px auto;
  height: 70%;
`;
const Outer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;
const TimeStep = styled.h3<{step?: 'done' | 'now' | 'yet'}>`
  color: ${props => props.step === 'done' ? props.theme.mainColor : props.step === 'now' ? props.theme.subColor : '#C4C4C4'};
  position: relative;
  padding: 0 0 0 20px;
  font-size: ${props => props.step === 'now' ? '14px' : '12px'};
  border-left: 1px solid ${props => props.step === 'done' ? props.theme.mainColor : '#C4C4C4'};
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${props => props.step === 'done' || props.step === 'now' ? props.theme.mainColor : '#C4C4C4'};
    border: 3px solid ${props => props.step === 'done' || props.step === 'now' ? props.theme.mainColor : '#C4C4C4'};
    border-radius: 999px;
    left: -8.5px;
  }
`;

const InputArea = styled.div`
  flex: 0.7;
`;
const AdditionalButtons = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-around;
  margin-left: 25px;
  margin-top: 25px;
`;
const FileButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${fileImg});
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const EmojiButton = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${emojiImg});
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const SubmitArea = styled.div`
  flex: 0.3;
  margin: 25px 25px 0 0;
`;
const SubmitButton = styled.button`
  width: 150px;
  height: 70px;
  background-color: ${props => props.theme.subColor};
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const EditButton = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 10px;
  background-color: #717171;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const WorkSpaceClient = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [message, setMessage] = useState<string | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const onFileClick = () => {
    fileRef.current?.click();
  }
  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  }
  const onSubmit = () => {
    if(input === '') return;
    setMessage(input);
    setInput('');
    textRef.current?.setAttribute('placeholder', '수정하려면 수정하기 버튼을 누르세요');
    textRef.current?.setAttribute('disabled', 'disabled');
  }
  const onEdit = () => {
    textRef.current?.removeAttribute('disabled');
    textRef.current?.setAttribute('placeholder', '제목을 입력하세요');
    textRef.current?.focus();
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
                  <TimeStep step='now'>제목입력</TimeStep>  
                  <TimeStep step='yet'>작업선택</TimeStep>  
                  <TimeStep step='yet'>세부사항<br/>선택</TimeStep>  
                  <TimeStep step='yet'>사용목적</TimeStep>  
                  <TimeStep step='yet'>키워드<br/>선택</TimeStep>  
                  <TimeStep step='yet'>마감기간<br/>선택</TimeStep>  
                  <TimeStep step='yet'>컬러선택</TimeStep>  
                  <TimeStep step='yet'>레퍼런스<br/>등록</TimeStep>  
                  <TimeStep step='yet'>기타 파일<br/>업로드 <p style={{display: 'inline' ,fontSize: '10px'}}>(선택)</p></TimeStep>  
                  <TimeStep step='yet'>추가요청<br/>사항 <p style={{display: 'inline' ,fontSize: '10px'}}>(선택)</p></TimeStep>  
                  <TimeStep step='yet'>제출하기</TimeStep>
                </Outer>
              </TimeLine>
            </BlurBackground>
            <Box>
              <BoxContent>
                <StepTitle>
                  <Step>제목 입력</Step>
                </StepTitle>
                <MessageBox>
                  <SystemMessage>제안서의 제목을 입력해 주세요</SystemMessage>
                  {
                    message ? (
                      <>
                        <ClientMessage>{message}</ClientMessage>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                          <NextStepButton>
                            <Circle color='#EFDC34'/>
                            NEXT STEP
                            <Circle color='#28BF1B'/>
                          </NextStepButton>
                        </div>
                      </>
                      
                    ) : null
                  }
                  
                </MessageBox>
                <TextContainer>
                  <InputArea>
                    <Text ref={textRef} onChange={onInputChange} value={input}/>
                    <AdditionalButtons>
                      <FileButton onClick={onFileClick}/>
                      <input ref={fileRef} type="file" accept="image/*" style={{display: 'none'}} />
                      <EmojiButton/>
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
