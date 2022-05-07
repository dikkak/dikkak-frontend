import React from "react";
import styled from "styled-components";

interface FormProps {
  btnMessage: string;
  message: string;
  color: string;
  text: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IdLabel = styled.label.attrs({ htmlFor: "id" })``;

const IdInput = styled.input.attrs((props: FormProps) => ({
  type: "text",
  id: "id",
  placeholder: props.btnMessage,
}))<FormProps>`
  width: 87%;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 0 2px ${(props) => props.color} inset;

  &:focus {
    outline: none;
  }
`;

const ItemLabel = styled.label.attrs({
  type: "text",
  htmlFor: "item",
})`
  font-size: 0.8rem;
  color: #717171;
  margin: 1.5em 0 0.5em 0;
  width: 100%;
  position: relative;
  left: 10%;
`;

const ItemInput = styled.input.attrs((props: FormProps) => ({
  type: "text",
  id: "item",
  placeholder: props.message,
}))<FormProps>`
  width: 87%;
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
  htmlFor: "phoneNumber",
})`
  margin: 1.5em 0 0.6em 0;
  font-size: 0.8rem;
  color: #717171;
  width: 100%;
  position: relative;
  left: 10%;
`;

const PhoneNumberInput = styled.input.attrs({
  type: "text",
  id: "phoneNumber",
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

const PrephoneNumberInput = styled.input.attrs({ type: "text" })`
  padding: 10px;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 0;
  margin-right: 1em;
  width: 30%;
  &:focus {
    outline: none;
  }
`;

const SubmitBtn = styled.button<FormProps>`
  width: 87%;
  background-color: ${(props) => props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #fff;
  border: 0;
  margin-top: 2.4em;
  padding: 8px;
  cursor: pointer;
`;

const FindForm = ({ btnMessage, message, color, text }: FormProps) => {
  return (
    <Form>
      <IdLabel></IdLabel>
      <IdInput
        message={message}
        btnMessage={btnMessage}
        color={color}
        text={text}
      ></IdInput>
      <ItemLabel>{text}</ItemLabel>
      <ItemInput
        message={message}
        btnMessage={btnMessage}
        color={color}
        text={text}
      ></ItemInput>
      <PhoneNumberLabel>휴대폰 번호</PhoneNumberLabel>
      <div style={{ display: "flex", width: "87%" }}>
        <PrephoneNumberInput></PrephoneNumberInput>
        <PhoneNumberInput></PhoneNumberInput>
      </div>
      <SubmitBtn
        text={text}
        btnMessage={btnMessage}
        message={message}
        color={color}
      >
        {btnMessage}
      </SubmitBtn>
    </Form>
  );
};

export default FindForm;
