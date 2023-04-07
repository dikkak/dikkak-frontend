import React from "react";
import styled from "styled-components";

const NextButton = () => {
  return (
    <Button>
      <Circle color="#EFDC34" />
      NEXT STEP
      <Circle color="#28BF1B" />
    </Button>
  );
};

export default NextButton;

const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 440px;
  height: 30px;
  margin-bottom: 20px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border-radius: 5px;
  background-color: #717171;
  color: white;
  cursor: pointer;
  opacity: 0.1;
  &:hover {
    opacity: 1;
  }
`;

const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
