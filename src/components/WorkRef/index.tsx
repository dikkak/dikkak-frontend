import React from "react";
import styled from "styled-components";

const MessageBox = styled.ul`
  position: relative;
  width: 100%;
  height: 63%;
  background-color: transparent;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.subColor};
  margin-bottom: 10px;
`;

const SystemMessage = styled.p`
  height: 35px;
  width: 393px;
  background-color: ${(props) => props.theme.mainColor};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
  padding-right: 10px;
  &::before {
    content: "";
    position: relative;
    background-color: transparent;
    width: 0;
    height: 0;
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
    border-left: 0px solid transparent;
    border-right: 15px solid ${(props) => props.theme.mainColor};
    left: -11.5px;
  }
`;

const Circle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const WorkRef = () => {
  return (
    <>
      <MessageBox>
        <Title>
          <Circle
            color="#905DFB"
            style={{ display: "inline-block", marginRight: "5px" }}
          />
          레퍼런스 등록
        </Title>
        <SystemMessage>
          디자인 작업의 참고가 될 레퍼런스를 3개 이상 등록해주세요
        </SystemMessage>
      </MessageBox>
    </>
  );
};

export default WorkRef;
