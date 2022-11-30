import React from "react";
import styled from "styled-components";
import Timeline from "../../components/Outsource/Timeline";
import OutsourceMenu from "../../components/Outsource/OutsourceMenu";
import MainContent from "../../components/Outsource/MainContent";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

interface RouterState {
  step: string;
  proposalId: number;
  title: string;
}

const OutsourcePage = () => {
  const params = useParams();
  const coworkingId = params.id || "";
  const location = useLocation();
  const step = (location.state as RouterState).step;
  const proposalId = (location.state as RouterState).proposalId;
  const title = (location.state as RouterState).title;

  const { data, isFetching, isLoading } = useQuery("user-info", userInfo);
  if (!isFetching && !data) {
    return <Navigate to="/login" />;
  }
  if (isLoading)
    return (
      <LoadingContainer>
        <FaSpinner size={36} className="spinner" />
        <br></br>
        <h1>잠시만 기다려주세요</h1>
      </LoadingContainer>
    );
  return (
    <div>
      <OutsourceMenu stepTitle={title} step={step} />
      <Container>
        <Wrapper>
          <Content>
            <Timeline />
            <MainContent
              coworkingId={coworkingId}
              data={data!}
              step={step!}
              proposalId={proposalId}
            />
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default OutsourcePage;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  margin-top: 145px;
  height: auto;
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1178px;
  min-width: 960px;
  height: 650px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 610px;
  display: flex;
  justify-content: space-between;
`;
