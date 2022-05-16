import { prependOnceListener } from "process";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
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

const Client = styled(Box)`
  background-color: ${(props) => props.theme.mainColor};
`;

const Designer = styled(Box)`
  background-color: ${(props) => props.theme.subColor};
`;

const ClientOrDesigner = () => {
  return (
    <Container>
      <Client>
        <p>클라이언트 입니다.</p>
        <span>의뢰자입니다.</span>
      </Client>
      <Designer>
        <p>디자이너 입니다.</p>
        <span>외주 작업자입니다.</span>
      </Designer>
    </Container>
  );
};

export default ClientOrDesigner;
