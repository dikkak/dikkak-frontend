import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em 0;
  width: 80%;
  height: 100%;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
export const CheckBox = styled(InputBox)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5em;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NameLabel = styled.label.attrs({ htmlFor: "username" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;

export const NameInput = styled.input.attrs({
  type: "text",
  id: "username",
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
export const PhoneLabel = styled.label.attrs({ htmlFor: "phoneNumber" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;

export const PhoneInput = styled.input.attrs({
  type: "text",
  id: "phoneNumber",
  placeholder: "-없이 입력해주세요",
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
export const ErrorMessage = styled.span`
  position: absolute;
  font-size: 0.5rem;
  color: red;
  margin-left: 1em;
  bottom: -2em;
`;
export const AllCheckBox = styled.input.attrs({
  type: "checkbox",
  id: "allAgree",
})`
  width: 25px;
  height: 25px;
  margin-right: 1em;
  background: #fafafa;
  border: 0;
  border-radius: 5px;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
`;

export const CheckBox1Label = styled.label.attrs({
  htmlFor: "termsConditions",
})`
  font-size: 12px;
`;
export const ChekcBox1Input = styled.input.attrs({
  type: "checkbox",
  id: "termsConditions",
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
export const CheckBox2Label = styled.label.attrs({ htmlFor: "dataPolicy" })`
  font-size: 12px;
`;
export const ChekcBox2Input = styled.input.attrs({
  type: "checkbox",
  id: "dataPolicy",
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
export const CheckBox3Label = styled.label.attrs({ htmlFor: "popUpMessage" })`
  font-size: 12px;
`;
export const CheckBox3SubLabel = styled.label.attrs({
  htmlFor: "popUpMessage",
})`
  font-size: 0.2rem;
  color: #717171;
  margin-top: 1.2em;
`;
export const ChekcBox3Input = styled.input.attrs({
  type: "checkbox",
  id: "popUpMessage",
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
export const CheckBox4Label = styled.label.attrs({
  htmlFor: "marketingMessage",
})`
  font-size: 12px;
`;

export const CheckBox4Input = styled.input.attrs({
  type: "checkbox",
  id: "marketingMessage",
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
export const RegisterButton = styled.button.attrs({ type: "submit" })`
  background-color: ${(props) => props.theme.subColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  padding: 8px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

//
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: auto;
    width: 90%;
  }
`;
export const BackButton = styled.div`
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
  @media screen and (max-width: 500px) {
    width: 120px;
    p {
      font-size: 0.5rem;
    }
  }
`;
export const Contents = styled.div`
  max-width: 834px;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 10px;
    margin-top: 50px;
  }
`;
export const TimeLine = styled.div`
  width: 20%;
  margin: 0 auto;
  height: 80%;
`;
export const Outer = styled.div`
  height: 100%;
  display: grid;
  margin-top: 30px;
  grid-template-rows: repeat(2, 1fr);
`;
export const TimeStep = styled.h3<{ step: string }>`
  color: ${(props) =>
    props.step === "done"
      ? props.theme.mainColor
      : props.step === "now"
      ? props.theme.subColor
      : "#C4C4C4"};
  position: relative;
  padding: 0 0 0 20px;
  font-size: ${(props) => (props.step === "now" ? "14px" : "12px")};
  border-left: 1px solid
    ${(props) => (props.step === "done" ? props.theme.mainColor : "#C4C4C4")};
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${(props) =>
      props.step === "done" || props.step === "now"
        ? props.theme.mainColor
        : "#C4C4C4"};
    border: 3px solid
      ${(props) =>
        props.step === "done" || props.step === "now"
          ? props.theme.mainColor
          : "#C4C4C4"};
    border-radius: 999px;
    left: -8.5px;
  }
`;

export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 0.7em;
  width: 30px;
  height: 30px;
`;

export const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  margin-right: 30%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  line-height: 20px;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 20px;
  }
`;
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  margin-bottom: 30px;
`;
export const RightContents = styled.div`
  width: 80%;
  height: 100%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const TitleBox = styled.p`
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 0 1px #717171 inset;
  font-size: 1.2rem;
  color: #717171;
  font-weight: 900;
  font-family: "Inter";
  text-align: center;
`;

export const CheckBoxBackground = styled.div`
  background-color: #e9e9e9;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 10px;
`;
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
