import styled from "styled-components";
import logoImg from "../../assets/logoImage/logoBasic.svg";

export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
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

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
  padding: 40px 0;
`;

export const Contents = styled.div`
  max-width: 834px;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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

export const FormContainer = styled.div`
  display: flex;
  width: 80%;
  height: 400px;
  justify-content: center;
  margin-bottom: 30px;
`;
