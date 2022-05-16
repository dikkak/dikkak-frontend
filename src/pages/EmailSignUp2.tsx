import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
height: 51.5%;
border-left: 1px solid ${props => props.theme.mainColor};
h3 {
  color: ${props => props.theme.subColor};
  &::before {
    background: ${props => props.theme.mainColor};
    border: 3px solid ${props => props.theme.mainColor};
  }
  &:first-child:not(.not) {
    color: ${props => props.theme.mainColor};
  }
};
`;
const Outer2 = styled(Outer)`
height: 48.5%;
justify-content: end;
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


const NextButton = styled.button.attrs({type: 'submit'})`
  background-color: ${(props) => props.theme.subColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  margin-top: 2.4em;
  padding: 8px;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
`;

const AllCheckBox = styled.input.attrs({type: 'checkbox', id: 'allAgree'})`
  width: 25px;
  height: 25px;
  margin-right: 1em;
  background: #FAFAFA;
  border: 0;
  border-radius: 5px;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;

const CheckBox1Label = styled.label.attrs({ htmlFor: "check1" })`
`;
const ChekcBox1Input = styled.input.attrs({
  type: "checkbox",
  id: "check1",
})`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const CheckBox2Label = styled.label.attrs({ htmlFor: "check2" })`
`;
const ChekcBox2Input = styled.input.attrs({
  type: "checkbox",
  id: "check2",
})`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const CheckBox3Label = styled.label.attrs({ htmlFor: "check3" })`
  margin-top: 0.5em;
`;
const CheckBox3SubLabel = styled.label.attrs({ htmlFor: "check3" })`
  font-size: 0.3rem;
  color: #717171;
  margin-top: 1em;
`;
const ChekcBox3Input = styled.input.attrs({
  type: "checkbox",
  id: "check3",
})`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;
const CheckBox4Label = styled.label.attrs({ htmlFor: "check4" })`
`;

const CheckBox4Input = styled.input.attrs({
  type: "checkbox",
  id: "check4",
})`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
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


interface StateType {
  form: {
    email: string;
    name: string;
    password: string;
    prePhone: string;
    phone: string;
  }
}

const EmailSignUp2 = () => {
  const navigate = useNavigate();
  const preForm = (useLocation().state as StateType).form;
  const {register, setValue, handleSubmit, getValues, formState:{errors}} = useForm();
  const checkAllBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked) {
      setValue('check1', true);
      setValue('check2', true);
      setValue('check3', true);
      setValue('check4', true);
    } else {
      setValue('check1', false);
      setValue('check2', false);
      setValue('check3', false);
      setValue('check4', false);
    }
  }

  const onValid = () => {
    if(!errors.check1 && !errors.check2) {
      const finalForm = {
        ...preForm,
        ...getValues()
      };
      console.log(finalForm);
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
                <Step>약관동의</Step> 
              </Outer>
              <Outer2>
                <Step className='not'>가입완료</Step>
              </Outer2>
            </TimeLine>
            <RightContents>
              <Title>
                <div>
                  <h1>회원가입</h1>
                  <LogoImage></LogoImage>
                </div>
                <p>디깍은 디자이너의 성장을 도모합니다</p>
                <TitleBox>디깍과 함께하기 위해 동의해주세요</TitleBox>
              </Title>
              <FormContainer onSubmit={handleSubmit(onValid)}>
                <InputBox>
                  <AllCheckBox onChange={checkAllBox} type='checkbox' id='allAgree'/>
                  <label htmlFor="allAgree">모두 동의합니다.</label>
                </InputBox>
                <InputBox>
                  <ChekcBox1Input {...register('check1', {required: '필수 선택입니다.'})} type='checkbox' id='check1'/>
                  <CheckBox1Label>이용약관에 동의합니다. (필수)</CheckBox1Label>
                  <ErrorMessage>{errors.check1?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <ChekcBox2Input {...register('check2', {required: '필수 선택입니다.'})} type='checkbox' id='check2'/>
                  <CheckBox2Label>개인정보 처리 방침에 동의합니다. (필수)</CheckBox2Label>
                  <ErrorMessage>{errors.check2?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <ChekcBox3Input {...register('check3')} type='checkbox' id='check3'/>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <CheckBox3Label>팝업메세지 제공에 동의합니다. (선택)</CheckBox3Label>
                    <CheckBox3SubLabel>동의 하지 않을시 최적화된 작업환경 제공이 불가합니다.</CheckBox3SubLabel>
                  </div>
                </InputBox>
                <InputBox>
                  <CheckBox4Input {...register('check4')} type='checkbox' id='check4'/>
                  <CheckBox4Label>마케팅 메세지 수신에 동의합니다. (선택)</CheckBox4Label>
                </InputBox>
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

export default EmailSignUp2;