import styled from "styled-components";

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
    position: absolute;
    right: 12px;
    top: -5px;
    border: 0;
    font-size: 3rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
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
`;
