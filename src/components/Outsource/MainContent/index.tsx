import React from "react";
import styled from "styled-components";
import Chat from "../Chat";

const MainContent = () => {
  return (
    <Container>
      <Chat />
    </Container>
  );
};

export default MainContent;

const Container = styled.div`
  width: 83%;
  height: 100%;
  padding: 12px;
  background-color: #fafafa;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
