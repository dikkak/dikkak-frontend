import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { authLogin, registNewUser } from '../../apis/auth_login';
import Menu from '../Menu';
import { AllCheckBox, CheckBox1Label, CheckBox2Label, CheckBox3Label, CheckBox3SubLabel, CheckBox4Input, CheckBox4Label, ChekcBox1Input, ChekcBox2Input, ChekcBox3Input, Container, ErrorMessage, FormContainer, InputBox, RegisterButton, CheckBox, NameLabel, NameInput, PhoneLabel, PhoneInput } from './styles';

interface IForm {
  username: string;
  phoneNumber: string;
  termsConditions: boolean;
  dataPolicy: boolean;
  popUpMessage: boolean;
  marketingMessage: boolean;
}

const Redirect = () => {
  const {register, setValue, handleSubmit, formState: { errors }} = useForm<IForm>();
  const [isNew, setIsNew] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const provider = location.pathname.split('/')[2];
  const checkAllBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue("termsConditions", true);
      setValue("dataPolicy", true);
      setValue("popUpMessage", true);
      setValue("marketingMessage", true);
    } else {
      setValue("termsConditions", false);
      setValue("dataPolicy", false);
      setValue("popUpMessage", false);
      setValue("marketingMessage", false);
    }
  };
  const onValid = (data: IForm) => {
    registNewUser(data)
    .then(() => navigate('/service_start'))
    .catch(() => navigate('/signup'));
  }
  useEffect(() => {
    authLogin(provider, code || '')
    .then(res => {
      axios.defaults.headers.common['Authorization'] =  `Bearer ${res.data.accessToken}`;
      if(res.data.newUser) {
        setIsNew(true);
      } else {
        navigate('/service_start');
      }
    })
    .catch(() => navigate('/signup'))
  }, [code, navigate, provider]);
  return isNew ? (
    <>
      <Menu/>
      <Container>
        <FormContainer onSubmit={handleSubmit(onValid)}>
          <InputBox>
            <NameLabel>이름</NameLabel>
            <NameInput {...register('username', {required: '이름을 입력하세요'})}/>
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </InputBox>
          <InputBox>
            <PhoneLabel>전화번호</PhoneLabel>
            <PhoneInput {...register('phoneNumber', {required: '전화번호를 입력하세요', pattern: {value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/gm, message: '형식이 잘못 되었습니다.'}})}/>
            <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
          </InputBox>
          <CheckBox>
            <AllCheckBox
              onChange={checkAllBox}
              type="checkbox"
              id="allAgree"
            />
            <label htmlFor="allAgree">모두 동의합니다.</label>
          </CheckBox>
          <CheckBox>
            <ChekcBox1Input
              {...register("termsConditions", { required: "필수 선택입니다." })}
              type="checkbox"
              id="termsConditions"
            />
            <CheckBox1Label>이용약관에 동의합니다. (필수)</CheckBox1Label>
            <ErrorMessage>{errors.termsConditions?.message}</ErrorMessage>
          </CheckBox>
          <CheckBox>
            <ChekcBox2Input
              {...register("dataPolicy", { required: "필수 선택입니다." })}
              type="checkbox"
              id="dataPolicy"
            />
            <CheckBox2Label>
              개인정보 처리 방침에 동의합니다. (필수)
            </CheckBox2Label>
            <ErrorMessage>{errors.dataPolicy?.message}</ErrorMessage>
          </CheckBox>
          <CheckBox>
            <ChekcBox3Input
              {...register("popUpMessage")}
              type="checkbox"
              id="popUpMessage"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CheckBox3Label>
                팝업메세지 제공에 동의합니다. (선택)
              </CheckBox3Label>
              <CheckBox3SubLabel>
                동의 하지 않을시 최적화된 작업환경 제공이 불가합니다.
              </CheckBox3SubLabel>
            </div>
          </CheckBox>
          <CheckBox>
            <CheckBox4Input
              {...register("marketingMessage")}
              type="checkbox"
              id="marketingMessage"
            />
            <CheckBox4Label>
              마케팅 메세지 수신에 동의합니다. (선택)
            </CheckBox4Label>
          </CheckBox>
          <RegisterButton>
            가입하기
          </RegisterButton>
        </FormContainer>
      </Container>
    </>
  ) : null;
};

export default Redirect;