import styled from "styled-components";
import xButton from "../../assets/logoImage/X.svg";

export const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 1.2rem;
  margin-bottom: 30px;
  button {
    background: transparent;
    position: relative;
    right: 12px;
    border: 0;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    font-size: 1rem;
    button {
      right: 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  p {
    width: 100%;
    padding: 30px 0 0 0;
  }
  div {
    line-height: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
export const CloseImg = styled.img.attrs({ src: xButton })`
  width: 18px;
  height: 18px;
  @media screen and (max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`;
