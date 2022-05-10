import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../components/Menu';

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 82px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;
  height: 660px;
  padding: 40px 0;
`;
const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  padding: 5px 10px;
  background-color: #717171;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  p {
    font-size: 0.8rem;
    color: white;
  }
`;

const TimeLine = styled.div`
  margin: 20px auto;
  padding: 20px;
  height: 80%;
`;
const Outer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 47.5%;
  border-left: 1px solid #C4C4C4;
  h3 {
    color: ${props => props.theme.subColor};
    &::before {
      background: ${props => props.theme.mainColor};
      border: 3px solid ${props => props.theme.mainColor};
    }  
  }
`;
const Outer2 = styled(Outer)`
  height: 52.5%;
  justify-content: space-between;
  border-left: 1px solid #C4C4C4;
  h3 {
    color: #C4C4C4;  
    &::before {
      background: #C4C4C4;
      border: 3px solid #C4C4C4;
    }
  }
`;

const Title = styled.h3`
  color: black;
  position: relative;
  margin: 0 0 0 30px;
  &::before {
    content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  left: -38.5px;
  }
`;

const EmailSignUp1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu/>
      <Container>
        <Wrapper>
          <BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <TimeLine>
            <Outer>
              <Title>계정생성</Title>  
            </Outer>
            <Outer2>
              <Title>약관동의</Title>
              <Title>가입완료</Title>
            </Outer2>
        </TimeLine>
        </Wrapper>
      </Container>
    </>
  );
};

export default EmailSignUp1;