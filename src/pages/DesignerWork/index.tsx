import React from 'react';
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Document from "../../components/Document";
import { useNavigate } from "react-router-dom";
import { BackButton, Container, DocumentContainer, LogoImage, Title, Wrapper } from './styles';


const completeWork = {
  title: "완료된 작업",
  contents: [
    {
      id: 1,
      name: '스파르타 코리안 ZEP / 스파르타코리안',
    },
    {
      id: 2,
      name: '상세페이지 / 캠퍼스소싱',
    },
    {
      id: 3,
      name: '홍보 포스터 제작 / 플랜잇',
    },
  ],
  workMenttion: "제안서 작업실",
  bgColor: "#905DFB",
};

const companyContent = {
  title: "외주 작업실",
  contents: [
    {
      id: 1,
      name: '디깍 로고 제작 / 클라이언트명 / 2차 작업중',
    },
    {
      id: 2,
      name: 'SNS굿 로고 제작 / 클라이언트명 / 작업 완료',
    },
  ],
  workMenttion: "외주 작업실",
  bgColor: "#329A29",
};

const DesignerWorkPage = () => {
  
  const navigate = useNavigate();
  return (
    <>
      <Menu></Menu>
      <Container>
        <Wrapper>
          <BackButton onClick={() => navigate(-1)}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <Title>
            <div>
              <h1>디자이너 작업실</h1>
              <LogoImage></LogoImage>
            </div>
            <p>외주작업을 위한 000 디자이너 작업실 입니다</p>
          </Title>
          <DocumentContainer>
            <Document content={completeWork}></Document>
            <Document content={companyContent}></Document>
          </DocumentContainer>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default DesignerWorkPage;