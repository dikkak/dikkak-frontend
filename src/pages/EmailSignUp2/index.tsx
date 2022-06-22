import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import { AllCheckBox, BackButton, CheckBox1Label, CheckBox2Label, CheckBox3Label, CheckBox3SubLabel, CheckBox4Input, CheckBox4Label, ChekcBox1Input, ChekcBox2Input, ChekcBox3Input, Container, Contents, ErrorMessage, FormContainer, InputBox, LogoImage, NextButton, Outer, Outer2, RightContents, Step, TimeLine, Title, TitleBox, Wrapper } from './styles';

interface StateType {
  form: {
    email: string;
    name: string;
    password: string;
    prePhone: string;
    phone: string;
  };
}

const EmailSignUp2 = () => {
  const navigate = useNavigate();

  const preForm = (useLocation().state as StateType).form;
  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const checkAllBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue("check1", true);
      setValue("check2", true);
      setValue("check3", true);
      setValue("check4", true);
    } else {
      setValue("check1", false);
      setValue("check2", false);
      setValue("check3", false);
      setValue("check4", false);
    }
  };

  const onValid = () => {
    if (!errors.check1 && !errors.check2) {
      const finalForm = {
        ...preForm,
        ...getValues(),
      };
      console.log(finalForm);
    }
  };
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
            <TimeLine>
              <Outer>
                <Step>계정생성</Step>
                <Step>약관동의</Step>
              </Outer>
              <Outer2>
                <Step className="not">가입완료</Step>
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
                  <AllCheckBox
                    onChange={checkAllBox}
                    type="checkbox"
                    id="allAgree"
                  />
                  <label htmlFor="allAgree">모두 동의합니다.</label>
                </InputBox>
                <InputBox>
                  <ChekcBox1Input
                    {...register("check1", { required: "필수 선택입니다." })}
                    type="checkbox"
                    id="check1"
                  />
                  <CheckBox1Label>이용약관에 동의합니다. (필수)</CheckBox1Label>
                  <ErrorMessage>{errors.check1?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <ChekcBox2Input
                    {...register("check2", { required: "필수 선택입니다." })}
                    type="checkbox"
                    id="check2"
                  />
                  <CheckBox2Label>
                    개인정보 처리 방침에 동의합니다. (필수)
                  </CheckBox2Label>
                  <ErrorMessage>{errors.check2?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <ChekcBox3Input
                    {...register("check3")}
                    type="checkbox"
                    id="check3"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <CheckBox3Label>
                      팝업메세지 제공에 동의합니다. (선택)
                    </CheckBox3Label>
                    <CheckBox3SubLabel>
                      동의 하지 않을시 최적화된 작업환경 제공이 불가합니다.
                    </CheckBox3SubLabel>
                  </div>
                </InputBox>
                <InputBox>
                  <CheckBox4Input
                    {...register("check4")}
                    type="checkbox"
                    id="check4"
                  />
                  <CheckBox4Label>
                    마케팅 메세지 수신에 동의합니다. (선택)
                  </CheckBox4Label>
                </InputBox>
                <NextButton onClick={() => navigate("/service_start")}>
                  다음 단계로
                </NextButton>
              </FormContainer>
            </RightContents>
          </Contents>
        </Wrapper>
      </Container>
      <Footer bgColor="transparent" />
    </>
  );
};

export default EmailSignUp2;
