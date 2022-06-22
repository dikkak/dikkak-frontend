import styled from "styled-components";

interface ItemInputProps {
  registerId: string;
  message: string;
  text: string;
  type: string;
}

interface PhoneNumberInputProps {
  phoneId: string;
}

interface SubmitBtnProps {
  color: string;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

//
export const TitleBox = styled.p`
  width: 87%;
  padding: 10px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0 0 0 1px ${(props) => props.color} inset;
  font-size: 0.87rem;
  color: #717171;
  font-weight: bold;
  font-family: "Inter";
`;
//

export const ItemLabel = styled.label.attrs((props: ItemInputProps) => ({
  type: props.type,
  htmlFor: props.registerId,
}))<ItemInputProps>`
  font-size: 0.8rem;
  color: #717171;
  margin: 30px 0 0.5em 0;
  width: 100%;
  position: relative;
  left: 10%;
`;

export const ItemInput = styled.input.attrs((props: ItemInputProps) => ({
  type: props.type,
  id: props.registerId,
  placeholder: props.message,
}))<ItemInputProps>`
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

export const PhoneNumberLabel = styled.label.attrs((props: PhoneNumberInputProps) => ({
  type: "text",
  htmlFor: props.phoneId,
}))<PhoneNumberInputProps>`
  margin: 1.5em 0 0.6em 0;
  font-size: 0.8rem;
  color: #717171;
  width: 100%;
  position: relative;
  left: 10%;
`;

export const PhoneNumberInput = styled.input.attrs({
  type: "text",
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

export const PrephoneNumberInput = styled.input.attrs(
  (props: PhoneNumberInputProps) => ({
    type: "text",
    id: props.phoneId,
  })
)<PhoneNumberInputProps>`
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

export const SubmitBtn = styled.button<SubmitBtnProps>`
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