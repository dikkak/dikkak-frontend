import React from "react";
import { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "../../Router";
import { theme } from "../../theme";
import { useRecoilState } from "recoil";
import { isTermsOfUseAtom, isTermsOfPersonalAtom } from "../../atoms";
import { TermsOfModal, TermsOfContent } from "./styles";
import TermOfUseContent from "../TermOfUseContent";
import TermOfPersonal from "../TermOfPersonal";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  a {color: #fff; text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none;}
  .spinner {
    animation: ${spinAnimation} 2s infinite;
  }
`;

const Init = () => {
  const [termOfUse, setTermOfUse] = useRecoilState(isTermsOfUseAtom);
  const [termsOfPersonal, setTermsOfPersonal] = useRecoilState(
    isTermsOfPersonalAtom
  );

  return (
    <>
      {termOfUse && (
        <TermsOfModal onClick={() => setTermOfUse((prev) => !prev)}>
          <TermsOfContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <TermOfUseContent></TermOfUseContent>
          </TermsOfContent>
        </TermsOfModal>
      )}
      {termsOfPersonal && (
        <TermsOfModal onClick={() => setTermsOfPersonal((prev) => !prev)}>
          <TermsOfContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <TermOfPersonal></TermOfPersonal>
          </TermsOfContent>
        </TermsOfModal>
      )}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen />
      </ThemeProvider>
    </>
  );
};

export default Init;
