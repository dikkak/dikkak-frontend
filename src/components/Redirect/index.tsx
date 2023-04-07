import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { authLogin, registNewUser } from "../../apis/auth_login";
import { FaSpinner } from "react-icons/fa";
import Menu from "../Menu";
import * as S from "./styles";
import Footer from "../Footer";

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
        localStorage.setItem("token", `Bearer ${res.accessToken}`);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.accessToken}`;
        if (!res.username) {
          setIsLoading(false);
          setIsNew(true);
        } else {
          navigate("/service_start");
        }
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
  if (isLoading)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  return isNew ? (
    <>
      <Menu />
      <S.Container>
        <S.Wrapper>
          <S.BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </S.BackButton>
          <S.Contents>
            <S.TimeLine>
              <S.Outer>
                <S.TimeStep step={step.first}>정보입력</S.TimeStep>
                <S.TimeStep step={step.second}>약관동의</S.TimeStep>
                <S.TimeStep step={step.third}>가입완료</S.TimeStep>
              </S.Outer>
            </S.TimeLine>
            <S.RightContents>
              <S.Title>
                <h1>회원가입</h1>
                <S.LogoImage />
              </S.Title>
              <S.FormContainer onSubmit={handleSubmit(onValid)}>
                <S.TitleBox>STEP 1 정보입력</S.TitleBox>
                <S.InputBox>
                  <S.NameLabel>이름</S.NameLabel>
                  <S.NameInput
                    {...register("username", { required: "이름을 입력하세요" })}
                    onChange={(e) => onChangeName(e)}
                  />
                  <S.ErrorMessage>{errors.username?.message}</S.ErrorMessage>
                </S.InputBox>
                <S.InputBox>
                  <S.PhoneLabel>휴대폰 번호</S.PhoneLabel>
                  <S.PhoneInput
                    {...register("phoneNumber", {
                      required: "전화번호를 입력하세요",
                      pattern: {
                        value: /^010(?:\d{4})\d{4}$/gm,
                        message: "형식이 잘못 되었습니다.",
                      },
                    })}
                    onChange={(e) => onChangePhone(e)}
                  />
                  <S.ErrorMessage>{errors.phoneNumber?.message}</S.ErrorMessage>
                </S.InputBox>
                <S.TitleBox>STEP 2 약관동의</S.TitleBox>
                <S.CheckBox style={{ marginBottom: "1em" }}>
                  <S.AllCheckBox
                    onChange={checkAllBox}
                    type="checkbox"
                    id="allAgree"
                  />
                  <label style={{ fontSize: "12px" }} htmlFor="allAgree">
                    모두 동의합니다.
                  </label>
                </S.CheckBox>
                <S.CheckBoxBackground>
                  <S.CheckBox>
                    <S.ChekcBox1Input
                      {...register("termsConditions", {
                        required: "필수 선택입니다.",
                      })}
                      type="checkbox"
                      id="termsConditions"
                      onChange={(e) => onCheckedTermsConditions(e)}
                    />
                    <S.CheckBox1Label>
                      이용약관에 동의합니다. (필수)
                    </S.CheckBox1Label>
                    <S.ErrorMessage>
                      {errors.termsConditions?.message}
                    </S.ErrorMessage>
                  </S.CheckBox>
                  <S.CheckBox>
                    <S.ChekcBox2Input
                      {...register("dataPolicy", {
                        required: "필수 선택입니다.",
                      })}
                      type="checkbox"
                      id="dataPolicy"
                      onChange={(e) => onCheckedDataPolicy(e)}
                    />
                    <S.CheckBox2Label>
                      개인정보 처리 방침에 동의합니다. (필수)
                    </S.CheckBox2Label>
                    <S.ErrorMessage>
                      {errors.dataPolicy?.message}
                    </S.ErrorMessage>
                  </S.CheckBox>
                  <S.CheckBox>
                    <S.ChekcBox3Input
                      {...register("popUpMessage")}
                      type="checkbox"
                      id="popUpMessage"
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <S.CheckBox3Label>
                        팝업메세지 제공에 동의합니다. (선택)
                      </S.CheckBox3Label>
                      <S.CheckBox3SubLabel>
                        동의 하지 않을시 최적화된 작업환경 제공이 불가합니다.
                      </S.CheckBox3SubLabel>
                    </div>
                  </S.CheckBox>
                  <S.CheckBox>
                    <S.CheckBox4Input
                      {...register("marketingMessage")}
                      type="checkbox"
                      id="marketingMessage"
                    />
                    <S.CheckBox4Label>
                      마케팅 메세지 수신에 동의합니다. (선택)
                    </S.CheckBox4Label>
                  </S.CheckBox>
                </S.CheckBoxBackground>
                <S.RegisterButton>가입하기</S.RegisterButton>
              </S.FormContainer>
            </S.RightContents>
          </S.Contents>
        </S.Wrapper>
      </S.Container>
      <Footer bgColor="#fff" />
    </>
  ) : null;
};

export default Redirect;
