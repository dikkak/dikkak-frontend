import styled from "styled-components";
import blurPin from "../../assets/mainPageImage/blurPin.png";
import logoImg from "../../assets/logoImage/logoBasic.svg";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;
export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
`;
export const Board = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 487px;
  padding: 40px 0;
  background-color: rgba(219, 219, 219, 0.15);
  border: 1px solid #e9e9e9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  top: 107px;
`;

export const BackButton = styled.div`
  position: relative;
  top: 20px;
  left: 0;
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

  @media screen and (max-width: 500px) {
    width: 120px;
    p {
      font-size: 0.5rem;
    }
  }
`;
export const BlurPin = styled.img.attrs({ src: blurPin })`
  position: absolute;
  width: 25px;
  height: 25px;
  &:first-child {
    top: 20px;
    left: 20px;
  }
  &:nth-child(2) {
    top: 20px;
    right: 20px;
  }
  &:nth-child(3) {
    bottom: 20px;
    left: 20px;
  }
  &:nth-child(4) {
    bottom: 20px;
    right: 20px;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 900;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const LogoImage = styled.img.attrs({ src: logoImg })`
  margin-left: 1em;
  width: 30px;
  height: 30px;
  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
`;
export const EmailLabel = styled.label.attrs({ htmlFor: "email" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-bottom: 1em;
`;
export const EmailInput = styled.input.attrs({
  type: "email",
  id: "email",
  placeholder: "이메일을 입력하세요",
})`
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  outline: none;
`;
export const PasswordLabel = styled.label.attrs({ htmlFor: "password" })`
  margin-left: 0.8em;
  font-size: 0.8rem;
  color: #717171;
  margin-top: 1em;
  margin-bottom: 1em;
`;
export const PasswordInput = styled(EmailInput).attrs({
  type: "password",
  id: "password",
  placeholder: "비밀번호를 입력하세요",
})``;
export const SubmitButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  margin-top: 1em;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const NextText = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLogo = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 500px) {
    width: 50px;
    heigth: 50px;
  }
`;

export const SocialLoginSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 2em 0;
  @media screen and (max-width: 500px) {
    margin: 1em 0;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    margin-top: 0.5em;
    color: #717171;
    font-size: 0.8rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const Slogan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  width: 100%;
  height: 42px;
  padding: 0.5em;
  color: ${(props) => props.theme.mainColor};
  background-color: white;
  font-size: 0.8rem;
  font-weight: 900;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 5px;
  outline: none;
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
export const SignUp = styled.button`
  margin-top: 1em;
  width: 100%;
  height: 42px;
  padding: 0.5em;
  color: white;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.5rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
