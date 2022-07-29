import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Document from "../../components/Document";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BackButton,
  Container,
  DocumentContainer,
  LogoImage,
  Title,
  Wrapper,
} from "./styles";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";
import { getProposalList } from "../../apis/workplace";

interface IList {
  id: number;
  title: string;
}
export interface IContent {
  type: string;
  title: string;
  contents?: IList[];
  workMenttion: string;
  bgColor: string;
}
const ClientWorkPage = () => {
  const { data: userData, isFetching } = useQuery("user-info", userInfo);
  const { data: workList } = useQuery("workspace-list", getProposalList, {
    enabled: !!userData,
  });
  const [clientContent, setClientContent] = useState<IContent>({
    type: userData?.type!,
    title: "제안서",
    contents: workList?.proposals,
    workMenttion: "제안서 작업실",
    bgColor: "#905DFB",
  });
  const [companyContent, setCompanyContent] = useState<IContent>({
    type: "workspace",
    title: "외주 작업실",
    contents: workList?.works,
    workMenttion: "외주 작업실",
    bgColor: "#329A29",
  });
  const navigate = useNavigate();
  const onDelete = (id: number[]) => {
    const newList = clientContent.contents!.filter(
      (content) => !id.includes(content.id)
    );
    setClientContent((prev) => {
      return {
        ...prev,
        contents: newList,
      };
    });
  };
  useEffect(() => {
    setClientContent({
      type: userData?.type!,
      title: "제안서",
      contents: workList?.proposals,
      workMenttion: "제안서 작업실",
      bgColor: "#905DFB",
    });
  }, [userData?.type, workList]);

  if (isFetching) return <div>Loading...</div>;
  if (!userData && !isFetching) {
    return <Navigate to="/login" />;
  }
  if (userData && !isFetching && userData.type === "DESIGNER") {
    return <Navigate to="/service_start" />;
  }
  return (
    <>
      <Menu></Menu>
      <Container>
        <Wrapper>
          <BackButton onClick={() => navigate("/service_start")}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </BackButton>
          <Title>
            <div>
              <h1>클라이언트 작업실</h1>
              <LogoImage></LogoImage>
            </div>
            <p>외주작업을 위한 {userData?.username} 클라이언트 작업실 입니다</p>
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
