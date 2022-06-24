import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logoImage/logoBasic.svg";
import blurPin from "../../assets/mainPageImage/blurPin.png";

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

  &:first-child {
    margin-right: 5rem;
  }
`;

const Box = styled.div`
  width: 774px;
  height: 100%;
  margin-right: 76px;
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

const StepTitle = styled.p`
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
  width: 100%;
  height: 333px;
  background-color: transparent;
  margin-bottom: 20px;
  p {
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
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 195px;
  background: rgba(240, 240, 240, 0.5);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 15px;
`;

const Text = styled.textarea.attrs({
  placeholder: "마우스를 이용해 선택해주세요",
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

const WorkSpaceClient = () => {
  const navigate = useNavigate();

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
            </BlurBackground>
            <Box>
              <BoxContent>
                <StepTitle>
                  <Step>제목 입력</Step>
                </StepTitle>
                <MessageBox>
                  <p>제안서의 제목을 입력해 주세요</p>
                </MessageBox>
                <TextContainer>
                  <Text></Text>
                </TextContainer>
              </BoxContent>
            </Box>
            <BlurBackground>
              <BlurPin />
              <BlurPin />
              <BlurPin />
              <BlurPin />
            </BlurBackground>
          </Content>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default WorkSpaceClient;
