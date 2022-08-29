import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Document from "../../components/Document";
import { Navigate, useNavigate } from "react-router-dom";
import {
  BackButton,
  Container,
  DocumentContainer,
  LoadingContainer,
  LogoImage,
  Popup,
  Title,
  Wrapper,
} from "./styles";
import { useQuery, useQueryClient } from "react-query";
import { userInfo } from "../../apis/auth_login";
import { getProposalList } from "../../apis/workplace";
import { FaSpinner } from "react-icons/fa";
import { deleteProposal } from "../../apis/proposal";
import Toast from "../../components/Toast";

interface IList {
  id: number;
  title: string;
  designerName?: string;
  coworkingId?: number;
  coworkingStep?: number;
}
export interface IClientContent {
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
    refetchOnMount: true,
  });
  const queryClient = useQueryClient();
  const [isActive, setIsActive] = useState(false);
  const [clientContent, setClientContent] = useState<
    IClientContent | undefined
  >();
  const [companyContent, setCompanyContent] = useState<
    IClientContent | undefined
  >();
  const navigate = useNavigate();
  const onDelete = (list: number[], callback: () => void) => {
    deleteProposal(list).then(() => {
      queryClient.invalidateQueries("workspace-list");
      callback();
    });
  };
  useEffect(() => {
    if (workList) {
      const proposalList: IList[] | undefined = workList?.map((proposal) => {
        return {
          id: proposal.proposalId,
          title: proposal.proposalTitle,
          coworkingId: proposal.coworkingId,
        };
      });
      const coworkList: IList[] | undefined = workList
        ?.filter((proposal) => proposal.coworkingId)
        .map((proposal) => {
          return {
            id: proposal.proposalId,
            title: proposal.proposalTitle,
            designerName: proposal.designerName,
            coworkingId: proposal.coworkingId,
            coworkingStep: proposal.coworkingStep,
          };
        });
      setClientContent({
        type: userData?.type!,
        title: "제안서",
        contents: proposalList,
        workMenttion: "제안서 작업실",
        bgColor: "#905DFB",
      });
      setCompanyContent({
        type: userData?.type!,
        title: "외주 작업실",
        contents: coworkList,
        workMenttion: "외주 작업실",
        bgColor: "#329A29",
      });
    }
  }, [userData?.type, workList]);

  if (isFetching)
    return (
      <LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </LoadingContainer>
    );
  if (!userData && !isFetching) {
    return <Navigate to="/login" />;
  }
  if (userData && !isFetching && userData.type === "DESIGNER") {
    return <Navigate to="/service_start" />;
  }
  return (
    <>
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
            <Document
              clientContent={clientContent}
              setIsActive={setIsActive}
              onDelete={onDelete}
            ></Document>
            <Document clientContent={companyContent}></Document>
          </DocumentContainer>
          <Popup>
            <Toast
              isActive={isActive}
              setIsActive={setIsActive}
              message={"링크 복사가 완료되었습니다!"}
            />
          </Popup>
        </Wrapper>
      </Container>
      <Footer bgColor="#fff"></Footer>
    </>
  );
};

export default React.memo(ClientWorkPage);
