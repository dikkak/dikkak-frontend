import React from "react";
import styled from "styled-components";
import Timeline from "../../components/Outsource/Timeline";
import OutsourceMenu from "../../components/Outsource/OutsourceMenu";
import MainContent from "../../components/Outsource/MainContent";
import { useQuery } from "react-query";
import { userInfo } from "../../apis/auth_login";
import { Navigate, useLocation, useParams } from "react-router-dom";

interface RouterState {
  step: string;
  proposalId: number;
}

const OutsourcePage = () => {
  const params = useParams();
  const coworkingId = params.id || "";
  const location = useLocation();
  const step = (location.state as RouterState).step;
  const proposalId = (location.state as RouterState).proposalId;

  const { data, isFetching } = useQuery("user-info", userInfo);
  if (!isFetching && !data) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <OutsourceMenu />
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
