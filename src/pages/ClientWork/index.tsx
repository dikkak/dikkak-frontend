import React, { useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Document from "../../components/Document";
import { Navigate, useNavigate } from "react-router-dom";
import { BackButton, Container, DocumentContainer, LogoImage, Title, Wrapper } from './styles';
import { useQuery } from 'react-query';
import { userInfo } from '../../apis/auth_login';

interface IList {
  id: number;
  name: string;
}
export interface IContent {
  type: 'client' | 'designer' | 'workspace';
  title: string;
  contents: IList[];
  workMenttion: string;
  bgColor: string;
}
const ClientWorkPage = () => {
  const {data, isFetching} = useQuery('user-info', userInfo);
  const [clientContent, setClientContent] = useState<IContent>({
    type: 'client',
    title: "제안서",
    contents: [
      {
        id: 1,
        name: '20220418 디깍 로고제작',
      },
      {
        id: 2,
        name: '로고 제작2',
      },
      {
        id: 3,
        name: '포스터 제작(3/8)',
      },
    ],
    workMenttion: "제안서 작업실",
    bgColor: "#905DFB",
  });
  const [companyContent, setCompanyContent] = useState<IContent>({
    type: 'workspace',
    title: "외주 작업실",
    contents: [
      {
        id: 1,
        name: '디깍 로고 제작 / 000디자이너 / 2차 작업중',
      },
      {
        id: 2,
        name: '디깍 로고 제작 / 000디자이너 / 1차 작업중',
      },
      {
        id: 3,
        name: '포스터 제작',
      },
    ],
    workMenttion: "외주 작업실",
    bgColor: "#329A29",
  });
  const navigate = useNavigate();
  const onDelete = (id: number[]) => {
    const newList = clientContent.contents.filter(content => !id.includes(content.id));
    setClientContent(prev => {
      return {
        ...prev,
        contents: newList
      }
    })
  }
  if(isFetching) return (<div>Loading...</div>)
  if(!data && !isFetching) {return <Navigate to='/login'/>}
  if(data && !isFetching && data.type === 'DESIGNER') {return <Navigate to='/service_start'/>}
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
            <p>외주작업을 위한 {data?.username} 클라이언트 작업실 입니다</p>
          </Title>
          <DocumentContainer>
            <Document content={clientContent} onDelete={onDelete}></Document>
            <Document content={companyContent}></Document>
          </DocumentContainer>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default ClientWorkPage;
