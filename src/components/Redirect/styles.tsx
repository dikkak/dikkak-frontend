import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
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
  placeholder: "전화번호를 입력하세요",
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
  font-size: .5rem;
  color: red;
  margin-left: 1em;
  bottom: -2em;
`;
export const AllCheckBox = styled.input.attrs({ type: "checkbox", id: "allAgree" })`
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

export const CheckBox1Label = styled.label.attrs({ htmlFor: "termsConditions" })``;
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
export const CheckBox2Label = styled.label.attrs({ htmlFor: "dataPolicy" })``;
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
  margin-top: 0.5em;
`;
export const CheckBox3SubLabel = styled.label.attrs({ htmlFor: "popUpMessage" })`
  font-size: 0.3rem;
  color: #717171;
  margin-top: 1em;
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
export const CheckBox4Label = styled.label.attrs({ htmlFor: "marketingMessage" })``;

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
  margin-top: 2.4em;
  padding: 8px;
  color: #fff;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;