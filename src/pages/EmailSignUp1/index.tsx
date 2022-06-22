import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/Menu';
import { useForm } from 'react-hook-form';
import Footer from '../../components/Footer';
import { BackButton, Container, Contents, EmailInput, EmailLabel, ErrorMessage, FormContainer, InputBox, LogoImage, NameInput, NameLabel, NextButton, Outer, Outer2, PasswordInput, PasswordLabel, PhoneNumberInput, PhoneNumberLabel, PrephoneNumberInput, RightContents, Step, TimeLine, Title, TitleBox, Wrapper } from './styles';

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

