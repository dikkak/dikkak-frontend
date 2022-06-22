import React from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Document from "../../components/Document";
import { useNavigate } from "react-router-dom";
import { BackButton, Container, DocumentContainer, LogoImage, Title, Wrapper } from './styles';

const clientContent = {
  title: "제안서",
  firstContent: "20220418 디깍 로고제작",
  secondContent: "로고 제작2",
  thirdContent: "포스터 제작(3/8)",
  workMenttion: "제안서 작업실",
  bgColor: "#905DFB",
};

const companyContent = {
  title: "외주 작업실",
  firstContent: "디깍 로고 제작 / 000디자이너 / 2차 작업중",
  secondContent: "디깍 로고 제작 / 000디자이너 / 1차 작업중",
  thirdContent: "포스터 제작",
  workMenttion: "외주 작업실",
  bgColor: "#329A29",
};

const ClientWorkPage = () => {
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
              <h1>클라이언트 작업실</h1>
              <LogoImage></LogoImage>
            </div>
            <p>외주작업을 위한 000 클라이언트 작업실 입니다</p>
          </Title>
          <DocumentContainer>
            <Document content={clientContent}></Document>
            <Document content={companyContent}></Document>
          </DocumentContainer>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default ClientWorkPage;
