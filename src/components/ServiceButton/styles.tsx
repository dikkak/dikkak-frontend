import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
  }
`;

export const Box = styled.div`
  width: 70%;
  height: 65px;
  border-radius: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  & p {
    font-size: 1rem;
  }
  & span {
    margin-top: 10px;
    font-size: 0.3rem;
  }
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 500px) {
    & p {
      font-size: 0.8rem;
    }
    & span {
      margin-top: 10px;
      font-size: 0.2rem;
    }
  }
`;

export const WorkSpace = styled(Box)`
  background-color: ${(props) => props.theme.mainColor};
  margin-bottom: 1rem;
`;

export const Logout = styled(Box)`
  background-color: ${(props) => props.theme.subColor};
`;
