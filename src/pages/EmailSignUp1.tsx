import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../components/Menu';
import logoImg from "../assets/logoImage/logoBasic.svg";
import { useForm } from 'react-hook-form';
import Footer from '../components/Footer';

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
`;
const Contents = styled.div`
  max-width: 834px;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
`;
const RightContents = styled.div`
  width: 80%;
  height: 100%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const TimeLine = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-bottom: 50px;
  height: 60%;
`;
const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 47.5%;
  border-left: 1px solid #C4C4C4;
  h3 {
    color: ${props => props.theme.subColor};
    &::before {
      background: ${props => props.theme.mainColor};
      border: 3px solid ${props => props.theme.mainColor};
    }  
  }
`;
const Outer2 = styled(Outer)`
  height: 52.5%;
  justify-content: space-between;
  border-left: 1px solid #C4C4C4;
  h3 {
    color: #C4C4C4;  
    &::before {
      background: #C4C4C4;
      border: 3px solid #C4C4C4;
    }
  }
`;

const Step = styled.h3`
  color: black;
  position: relative;
  margin: 0 0 0 30px;
  &::before {
    content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  left: -38.5px;
  }
`;

const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50px;
  top: 52px;
  font-family: "Noto Sans KR";
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: bold;
      text-align: center;
      font-size: 30px;
    }
  }
  & p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em 0;
  width: 80%;
  height: 100%;
`;
const TitleBox = styled.p`
  width: 80%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 0 1px #717171 inset;
  font-size: 0.87rem;
  color: #717171;
  font-weight: 900;
  font-family: "Inter";
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

const EmailLabel = styled.label.attrs({ htmlFor: "email" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;
const EmailInput = styled.input.attrs({
  type: "email",
  id: "email",
  placeholder: "이메일을 입력하세요",
})`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const NameLabel = styled.label.attrs({ htmlFor: "name" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;
const NameInput = styled.input.attrs({
  type: "text",
  id: "name",
  placeholder: "이름 또는 가입명을 입력하세요",
})`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const PasswordLabel = styled.label.attrs({ htmlFor: "password" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;
const PasswordInput = styled.input.attrs({
  type: "password",
  id: "password",
  placeholder: "비밀번호를 입력하세요",
})`
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const PhoneNumberLabel = styled.label.attrs({
  type: "text",
  htmlFor: 'phone'
})`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;

const PhoneNumberInput = styled.input.attrs({
  type: "text",
  placeholder: "휴대폰 번호를 입력하세요",
})`
  width: 70%;
  position: relative;
  right: 0%;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;

const PrephoneNumberInput = styled.input.attrs({
    type: "text",
    id: 'phone'
})`
  padding: 10px;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  margin-right: 1em;
  width: 30%;
  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  font-size: .5rem;
  color: red;
  margin-left: 1em;
  bottom: -2em;
`;

const NextButton = styled.button`
  background-color: ${(props) => props.theme.subColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  margin-top: 2.4em;
  padding: 8px;
  cursor: pointer;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
  
`;

const EmailSignUp1 = () => {
  const navigate = useNavigate();
  const {register, formState:{errors}, getValues, handleSubmit} = useForm();
  const onNextStep = () => {
    if(!errors.email && !errors.name && !errors.password && !errors.prePhone && !errors.phone) {
      navigate('/email_signup2', {
        state: {
          form: getValues(),
        },
      })
    }
  }
  return (
    <>
      <Menu/>
      <Container>
        <Wrapper>
          <BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <Contents>
            <TimeLine>
              <Outer>
                <Step>계정생성</Step>  
              </Outer>
              <Outer2>
                <Step>약관동의</Step>
                <Step>가입완료</Step>
              </Outer2>
            </TimeLine>
            <RightContents>
              <Title>
                <div>
                  <h1>회원가입</h1>
                  <LogoImage></LogoImage>
                </div>
                <p>디깍은 디자이너의 성장을 도모합니다</p>
                <TitleBox>이메일로 가입하기</TitleBox>
              </Title>
              <FormContainer onSubmit={handleSubmit(onNextStep)}>
                <InputBox>
                  <EmailLabel>이메일</EmailLabel>
                  <EmailInput {...register('email', {required: '이메일을 입력하세요.'})}/>
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <NameLabel>이름</NameLabel>
                  <NameInput {...register('name', {required: '이름을 입력하세요'})}/>
                  <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <PasswordLabel>비밀번호</PasswordLabel>
                  <PasswordInput {...register('password', {required: '비밀번호를 입력하세요'})}/>
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                </InputBox>
                <PhoneNumberLabel>휴대폰 번호</PhoneNumberLabel>
                <div style={{ display: "flex", width: "100%", position:'relative' }}>
                  <PrephoneNumberInput {...register('prePhone', {required: '전화번호를 입력하세요'})}/>
                  <PhoneNumberInput {...register('phone', {required: '전화번호를 입력하세요'})}/>
                  <ErrorMessage>{(errors.prePhone || errors.phone) ? "전화번호를 입력하세요" : null}</ErrorMessage>
                </div>
                <NextButton>다음 단계로</NextButton>
              </FormContainer>
            </RightContents>            
          </Contents>     
        </Wrapper>
      </Container>
      <Footer bgColor='transparent'/>
    </>
  );
};

export default EmailSignUp1;

