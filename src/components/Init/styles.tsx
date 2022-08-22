import styled from "styled-components";

export const TermsOfModal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
  min-height: 100%;
  overflow: scroll;
`;

export const TermsOfContent = styled.div`
  margin: 80px auto;
  width: 600px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.65);
`;
