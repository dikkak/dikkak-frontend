import React from 'react';
import {Form, ItemInput, ItemLabel, PhoneNumberInput, PhoneNumberLabel, PrephoneNumberInput, SubmitBtn, TitleBox} from './styles';

interface FormProps {
  btnMessage: string;
  message: string;
  color: string;
  text: string;
  registerId: string;
  phoneId: string;
  type: string;
}
const FindForm = ({
  btnMessage,
  message,
  color,
  text,
  registerId,
  phoneId,
  type,
}: FormProps) => {
  return (
    <Form>
      <TitleBox color={color}>{btnMessage}</TitleBox>
      <ItemLabel
        type={type}
        message={message}
        registerId={registerId}
        text={text}
      >
        {text}
      </ItemLabel>
      <ItemInput
        type={type}
        message={message}
        registerId={registerId}
        text={text}
      ></ItemInput>
      <PhoneNumberLabel phoneId={phoneId}>휴대폰 번호</PhoneNumberLabel>
      <div style={{ display: "flex", width: "87%" }}>
        <PrephoneNumberInput phoneId={phoneId}></PrephoneNumberInput>
        <PhoneNumberInput></PhoneNumberInput>
      </div>
      <SubmitBtn color={color}>{btnMessage}</SubmitBtn>
    </Form>
  );
};

export default FindForm;
