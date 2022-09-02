import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Document from "../../components/Document";
import { Navigate, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";
import { getWorkplaceList } from "../../apis/workplace";
import { FaSpinner } from "react-icons/fa";

interface IList {
  id: number;
  title: string;
  clientName: string;
  coworkingId: number;
  coworkingStep: number;
}
export interface IDesignerContent {
  type: string;
  title: string;
  contents?: IList[];
  workMenttion: string;
  bgColor: string;
}

const DesignerWorkPage = () => {
  const { data: userData, isFetching } = useQuery("user-info", userInfo);
  const { data: workList } = useQuery("workspace-list", getWorkplaceList, {
    enabled: !!userData,
  });
  const completeList: IList[] | undefined = workList?.complete.map((item) => {
    return {
      id: item.proposalId,
      title: item.proposalTitle,
      clientName: item.clientName,
      coworkingId: item.coworkingId,
      coworkingStep: item.coworkingStep,
    };
  });
  const workplaceList: IList[] | undefined = workList?.progress.map((item) => {
    return {
      id: item.proposalId,
      title: item.proposalTitle,
      clientName: item.clientName,
      coworkingId: item.coworkingId,
      coworkingStep: item.coworkingStep,
    };
  });
  const [completeWork, setCompleteWork] = useState<IDesignerContent>({
    type: userData?.type!,
    title: "완료된 작업",
    contents: completeList,
    workMenttion: "한번에 내려받기.zip",
    bgColor: "#905DFB",
  });
  const [companyContent, setCompanyContent] = useState<IDesignerContent>({
    type: userData?.type!,
    title: "외주 작업실",
    contents: workplaceList,
    workMenttion: "외주 작업실",
    bgColor: "#329A29",
  });
  const navigate = useNavigate();
  useEffect(() => {
    setCompleteWork({
      type: userData?.type!,
      title: "완료된 작업",
      contents: completeList,
      workMenttion: "한번에 내려받기.zip",
      bgColor: "#905DFB",
    });
    setCompanyContent({
      type: userData?.type!,
      title: "외주 작업실",
      contents: workplaceList,
      workMenttion: "외주 작업실",
      bgColor: "#329A29",
    });
  }, [userData?.type, completeList, workplaceList]);
  if (isFetching)
    return (
      <S.LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </S.LoadingContainer>
    );
  if (!userData && !isFetching) {
    return <Navigate to="/login" />;
  }
  if (userData && !isFetching && userData.type === "CLIENT") {
    return <Navigate to="/service_start" />;
  }
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.BackButton onClick={() => navigate("/service_start")}>
            <p>◀︎</p>
            <p>이전으로 돌아가기</p>
          </S.BackButton>
          <S.Title>
            <div>
              <h1>디자이너 작업실</h1>
              <S.LogoImage />
            </div>
            <p>외주작업을 위한 {userData?.username} 디자이너 작업실 입니다</p>
            <p>
              최초 사용자의 경우{" "}
              <a href="https://forms.gle/AUwRdVzFUfkS2m3x5">구글 설문지</a> 를
              통해 참여 코드를 요청해주세요!(1-2분 내 이메일로 코드 자동
              발송해드립니다)
            </p>
          </S.Title>
          <S.DocumentContainer>
            <Document designerContent={completeWork}></Document>
            <Document designerContent={companyContent}></Document>
          </S.DocumentContainer>
        </S.Wrapper>
      </S.Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default DesignerWorkPage;
