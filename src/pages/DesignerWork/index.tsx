import React, { useState } from "react";
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

const DesignerWorkPage = () => {
  const { data: userData, isFetching } = useQuery("user-info", userInfo);
  const [completeWork, setCompleteWork] = useState<IContent>({
    type: "designer",
    title: "완료된 작업",
    contents: [
      {
        id: 1,
        title: "스파르타 코리안 ZEP / 스파르타코리안",
      },
      {
        id: 2,
        title: "상세페이지 / 캠퍼스소싱",
      },
      {
        id: 3,
        title: "홍보 포스터 제작 / 플랜잇",
      },
    ],
    workMenttion: "제안서 작업실",
    bgColor: "#905DFB",
  });
  const [companyContent, setCompanyContent] = useState<IContent>({
    type: "workspace",
    title: "외주 작업실",
    contents: [
      {
        id: 1,
        title: "디깍 로고 제작 / 클라이언트명 / 2차 작업중",
      },
      {
        id: 2,
        title: "SNS굿 로고 제작 / 클라이언트명 / 작업 완료",
      },
    ],
    workMenttion: "외주 작업실",
    bgColor: "#329A29",
  });
  const navigate = useNavigate();
  const onDelete = (id: number[]) => {
    const newList = completeWork.contents!.filter(
      (content) => !id.includes(content.id)
    );
    setCompleteWork((prev) => {
      return {
        ...prev,
        contents: newList,
      };
    });
  };
  if (isFetching) return <div>Loading...</div>;
  if (!userData && !isFetching) {
    return <Navigate to="/login" />;
  }
  if (userData && !isFetching && userData.type === "CLIENT") {
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
              <h1>디자이너 작업실</h1>
              <LogoImage></LogoImage>
            </div>
            <p>외주작업을 위한 {userData?.username} 디자이너 작업실 입니다</p>
            <p>
              최초 사용자의 경우{" "}
              <a href="https://open.kakao.com/o/gxhDqKSd">
                https://open.kakao.com/o/gxhDqKSd
              </a>{" "}
              오픈채팅방에 접속해주세요!
            </p>
          </Title>
          <DocumentContainer>
            <Document content={completeWork} onDelete={onDelete}></Document>
            <Document content={companyContent}></Document>
          </DocumentContainer>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default DesignerWorkPage;
