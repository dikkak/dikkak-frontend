import React from "react";
import { useNavigate } from "react-router-dom";
import {Container, Client, Designer} from './styles';

const ClientOrDesigner = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Client onClick={() => navigate("/client_workspace1")}>
        <p>클라이언트 입니다.</p>
        <span>의뢰자입니다.</span>
      </Client>
      <Designer onClick={() => navigate("/designer_workspace1")}>
        <p>디자이너 입니다.</p>
        <span>외주 작업자입니다.</span>
      </Designer>
    </Container>
  );
};

export default ClientOrDesigner;
