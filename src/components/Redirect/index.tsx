import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { authLogin, registNewUser } from "../../apis/auth_login";
import Menu from "../Menu";
import {
  AllCheckBox,
  CheckBox1Label,
  CheckBox2Label,
  CheckBox3Label,
  CheckBox3SubLabel,
  CheckBox4Input,
  CheckBox4Label,
  ChekcBox1Input,
  ChekcBox2Input,
  ChekcBox3Input,
  Container,
  ErrorMessage,
  FormContainer,
  InputBox,
  RegisterButton,
  CheckBox,
  NameLabel,
  NameInput,
  PhoneLabel,
  PhoneInput,
  Wrapper,
  BackButton,
  Contents,
  TimeLine,
  TimeStep,
  Outer,
  LogoImage,
  Title,
  RightContents,
  TitleBox,
  CheckBoxBackground,
} from "./styles";
import { gapi } from "gapi-script";

interface IForm {
  username: string;
  phoneNumber: string;
  termsConditions: boolean;
  dataPolicy: boolean;
  popUpMessage: boolean;
  marketingMessage: boolean;
}

const Redirect = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>();
  const [isLoading, setIsLoading] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const provider = location.pathname.split("/")[2];
  const checkAllBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue("termsConditions", true);
      setValue("dataPolicy", true);
      setValue("popUpMessage", true);
      setValue("marketingMessage", true);
      if (!watch("username") || !watch("phoneNumber")) return;
      setStep((prev) => {
        return { ...prev, second: "done", third: "now" };
      });
    } else {
      setValue("termsConditions", false);
      setValue("dataPolicy", false);
      setValue("popUpMessage", false);
      setValue("marketingMessage", false);
      if (!watch("username") || !watch("phoneNumber")) return;
      setStep((prev) => {
        return { ...prev, second: "now", third: "yet" };
      });
    }
  };
  const onValid = (data: IForm) => {
    registNewUser(data)
      .then(() => navigate("/service_start"))
      .catch(() => navigate("/signup"));
  };
  const [step, setStep] = useState<{
    first: string;
    second: string;
    third: string;
  }>({
    first: "now",
    second: "yet",
    third: "yet",
  });
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value &&
      watch("termsConditions") &&
      watch("dataPolicy") &&
      watch("phoneNumber")
    )
      setStep({ first: "done", second: "done", third: "now" });
    else
      e.target.value && watch("phoneNumber")
        ? setStep({ first: "done", second: "now", third: "yet" })
        : setStep({ first: "now", second: "yet", third: "yet" });
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value &&
      watch("termsConditions") &&
      watch("dataPolicy") &&
      watch("username")
    )
      setStep({ first: "done", second: "done", third: "now" });
    else
      e.target.value && watch("username")
        ? setStep({ first: "done", second: "now", third: "yet" })
        : setStep({ first: "now", second: "yet", third: "yet" });
  };
  const onCheckedTermsConditions = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!watch("username") || !watch("phoneNumber")) return;
    e.target.checked && watch("dataPolicy")
      ? setStep((prev) => {
          return { ...prev, second: "done", third: "now" };
        })
      : setStep((prev) => {
          return { ...prev, second: "now", third: "yet" };
        });
  };
  const onCheckedDataPolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!watch("username") || !watch("phoneNumber")) return;
    e.target.checked && watch("termsConditions")
      ? setStep((prev) => {
          return { ...prev, second: "done", third: "now" };
        })
      : setStep((prev) => {
          return { ...prev, second: "now", third: "yet" };
        });
  };
  useEffect(() => {
    authLogin(provider, code || "")
      .then((res) => {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        if (!res.username) {
          setIsLoading(false);
          setIsNew(true);
        } else {
          if (provider === "GOOGLE") {
            gapi.load("auth2", function () {
              gapi.auth2.init();
            });
          }
          navigate("/service_start");
        }
        console.log(res);
      })
      .catch((e: AxiosError) => {
        if (e.response?.status === 409) {
          alert("이미 다른 소셜로 가입된 이메일입니다.");
          navigate("/login");
        }
        if (e.response?.status === 400) {
          navigate("/login");
        }
      });
  }, [code, navigate, provider]);
  if (isLoading) <div>Loading...</div>;
  return isNew ? (
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
                <TimeStep step={step.first}>정보입력</TimeStep>
                <TimeStep step={step.second}>약관동의</TimeStep>
                <TimeStep step={step.third}>가입완료</TimeStep>
              </Outer>
            </TimeLine>
            <RightContents>
              <Title>
                <h1>회원가입</h1>
                <LogoImage></LogoImage>
              </Title>
              <FormContainer onSubmit={handleSubmit(onValid)}>
                <TitleBox>STEP 1 정보입력</TitleBox>
                <InputBox>
                  <NameLabel>이름</NameLabel>
                  <NameInput
                    {...register("username", { required: "이름을 입력하세요" })}
                    onChange={(e) => onChangeName(e)}
                  />
                  <ErrorMessage>{errors.username?.message}</ErrorMessage>
                </InputBox>
                <InputBox>
                  <PhoneLabel>휴대폰 번호</PhoneLabel>
                  <PhoneInput
                    {...register("phoneNumber", {
                      required: "전화번호를 입력하세요",
                      pattern: {
                        value: /^010(?:\d{4})\d{4}$/gm,
                        message: "형식이 잘못 되었습니다.",
                      },
                    })}
                    onChange={(e) => onChangePhone(e)}
                  />
                  <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
                </InputBox>
                <TitleBox>STEP 2 약관동의</TitleBox>
                <CheckBox style={{ marginBottom: "1em" }}>
                  <AllCheckBox
                    onChange={checkAllBox}
                    type="checkbox"
                    id="allAgree"
                  />
                  <label style={{ fontSize: "12px" }} htmlFor="allAgree">
                    모두 동의합니다.
                  </label>
                </CheckBox>
                <CheckBoxBackground>
                  <CheckBox>
                    <ChekcBox1Input
                      {...register("termsConditions", {
                        required: "필수 선택입니다.",
                      })}
                      type="checkbox"
                      id="termsConditions"
                      onChange={(e) => onCheckedTermsConditions(e)}
                    />
                    <CheckBox1Label>
                      이용약관에 동의합니다. (필수)
                    </CheckBox1Label>
                    <ErrorMessage>
                      {errors.termsConditions?.message}
                    </ErrorMessage>
                  </CheckBox>
                  <CheckBox>
                    <ChekcBox2Input
                      {...register("dataPolicy", {
                        required: "필수 선택입니다.",
                      })}
                      type="checkbox"
                      id="dataPolicy"
                      onChange={(e) => onCheckedDataPolicy(e)}
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
                </CheckBoxBackground>
                <RegisterButton>가입하기</RegisterButton>
              </FormContainer>
            </RightContents>
          </Contents>
        </Wrapper>
      </Container>
    </>
  ) : null;
};

export default Redirect;
