
import React from "react";
import FindForm from "../../components/FindForm";
import Menu from "../../components/Menu";
import { useNavigate } from "react-router-dom";
import { BackButton, Container, Contents, FormContainer, LogoImage, Title, Wrapper } from './styles';

const idInfo = {
  idMessage: "가입명을 입력해주세요",
  idBtnMessage: "ID 찾기",
  nameId: "nameId",
  phoneId: "phone1",
  text: "가입명",
  color: "#905DFB",
  type: "text",
};

const pwInfo = {
  emailMessage: "가입시 사용한 메일을 입력해주세요",
  passwordBtnMessage: "PW 찾기",
  emailId: "emailId",
  phoneId: "phone2",
  text: "메일",
  color: "#329A29",
  type: "email",
};

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
                btnMessage={idInfo.idBtnMessage}
                message={idInfo.idMessage}
                color={idInfo.color}
                text={idInfo.text}
                registerId={idInfo.nameId}
                phoneId={idInfo.phoneId}
                type={idInfo.type}
              ></FindForm>
              <FindForm
                btnMessage={pwInfo.passwordBtnMessage}
                message={pwInfo.emailMessage}
                color={pwInfo.color}
                text={pwInfo.text}
                registerId={pwInfo.emailId}
                phoneId={pwInfo.phoneId}
                type={pwInfo.type}
              ></FindForm>
            </FormContainer>
          </Contents>
        </Wrapper>
      </Container>
    </>
  );
};

export default FindAccount;