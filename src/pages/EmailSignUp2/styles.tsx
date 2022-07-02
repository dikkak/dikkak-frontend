import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
`;
export const Contents = styled.div`
  max-width: 834px;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
`;
export const RightContents = styled.div`
  width: 80%;
  height: 100%;
  padding-right: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BackButton = styled.div`
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
export const TimeLine = styled.div`
  width: 20%;
  margin: 0 auto;
  margin-bottom: 50px;
  height: 60%;
`;
export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 51.5%;
  border-left: 1px solid ${(props) => props.theme.mainColor};
  h3 {
    color: ${(props) => props.theme.subColor};
    &::before {
      background: ${(props) => props.theme.mainColor};
      border: 3px solid ${(props) => props.theme.mainColor};
    }
    &:first-child:not(.not) {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
export const Outer2 = styled(Outer)`
  height: 48.5%;
  justify-content: end;
  border-left: 1px solid #c4c4c4;
  h3 {
    color: #c4c4c4;
    &::before {
      background: #c4c4c4;
      border: 3px solid #c4c4c4;
    }
  }
`;

export const Step = styled.h3`
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

export const Title = styled.div`
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

export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 30px;
  height: 30px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em 0;
  width: 80%;
  height: 100%;
`;
export const TitleBox = styled.p`
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

export const NextButton = styled.button.attrs({ type: "submit" })`
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

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
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

export const CheckBox1Label = styled.label.attrs({ htmlFor: "check1" })``;
export const ChekcBox1Input = styled.input.attrs({
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
export const CheckBox2Label = styled.label.attrs({ htmlFor: "check2" })``;
export const ChekcBox2Input = styled.input.attrs({
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
export const CheckBox3Label = styled.label.attrs({ htmlFor: "check3" })`
  margin-top: 0.5em;
`;
export const CheckBox3SubLabel = styled.label.attrs({ htmlFor: "check3" })`
  font-size: 0.3rem;
  color: #717171;
  margin-top: 1em;
`;
export const ChekcBox3Input = styled.input.attrs({
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
export const CheckBox4Label = styled.label.attrs({ htmlFor: "check4" })``;

export const CheckBox4Input = styled.input.attrs({
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

export const ErrorMessage = styled.span`
  position: absolute;
  font-size: 0.5rem;
  color: red;
  margin-left: 1em;
  bottom: -2em;
`;