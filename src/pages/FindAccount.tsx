import React from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logoImage/logoBasic.svg";
import FindForm from "../components/findForm";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    color: white;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
  padding: 40px 0;
`;

const Contents = styled.div`
  max-width: 834px;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 50px;
  top: 52px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      font-size: 1.4em;
    }
  }
  & p {
    font-weight: 400;
    font-size: 0.8em;
    line-height: 26px;
    padding: 8px 0;
    color: #717171;
    font-family: "Noto Sans KR";
  }
`;

const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 30px;
  height: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  width: 80%;
  height: 400px;
  justify-content: center;
  margin-bottom: 30px;
`;

const idMessage = "가입명을 입력해주세요";
const emailMessage = "가입시 사용한 메일을 입력해주세요";
const idBtnMessage = "ID 찾기";
const passwordBtnMessage = "PW 찾기";
const iddText = "가입명";
const pwText = "메일";

const FindAccount = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu />
      <Container>
        <Wrapper>
          <BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <Contents>
            <Title>
              <div>
                <h1>ID/PW찾기</h1>
                <LogoImage></LogoImage>
              </div>
              <p>디깎은 디자이너의 성장을 도모합니다</p>
            </Title>
            <FormContainer>
              <FindForm
                btnMessage={idBtnMessage}
                message={idMessage}
                color="#905DFB"
                text={iddText}
              ></FindForm>
              <FindForm
                btnMessage={passwordBtnMessage}
                message={emailMessage}
                color="#329A29"
                text={pwText}
              ></FindForm>
            </FormContainer>
          </Contents>
        </Wrapper>
      </Container>
    </>
  );
};

export default FindAccount;
