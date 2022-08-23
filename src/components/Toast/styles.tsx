import styled, { css, keyframes } from "styled-components";
import logoImg from "../../assets/logoImage/popupLogo.png";

export const fadein = keyframes`
  0% { bottom: 0px; opacity: 0; } 
  100% { bottom: 43px; opacity: 1; }
`;
export const fadeout = keyframes`
  0% { bottom: 43px; opacity: 1; } 
  100% { bottom: 0px; opacity: 0; }
`;

export const ToastBox = styled.div<{ show: boolean }>`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  display: flex;
  color: white;
  font-weight: 900;
  width: 377px;
  height: 48px;
  background: rgba(113, 113, 113, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 5px;
  z-index: 100;
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation-fill-mode: forwards;
`;
export const Logo = styled.img.attrs({ src: logoImg })`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 20px;
`;
