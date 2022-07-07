import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 48.5%;
  height: 80px;
  border-radius: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);

  & p {
    font-size: 1rem;
  }
  & span {
    margin-top: 10px;
    font-size: 0.3rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const WorkSpace = styled(Box)`
  background-color: ${(props) => props.theme.mainColor};
`;

export const Logout = styled(Box)`
  background-color: ${(props) => props.theme.subColor};
`;
