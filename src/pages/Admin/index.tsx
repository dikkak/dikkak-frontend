import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getAllProposal,
  getProposalByEmail,
  IClientProposal,
  matchingDesigner,
} from "../../apis/admin";
import { authLogout, userInfo } from "../../apis/auth_login";
import { KAKAO_AUTH_LOGOUT_URL } from "../../OAuth";
import Menu from "../../components/Menu";
import * as moment from "moment";

const Admin = () => {
  const [totalPage, setTotalPage] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { data: userData } = useQuery("user-info", userInfo);
  const { data: proposalData } = useQuery(
    ["proposal", currentPage],
    () => getAllProposal(currentPage),
    {
      staleTime: 2000, // staleTime을 2초로 설정하여 fetch된 데이터는 2초간 fresh 상태
      onSuccess: () => {
        setTotalPage(
          Array.from(
            { length: proposalData?.totalPages || 1 },
            (_, index) => index
          )
        );
      },
    }
  );
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [cliEmail, setCliEmail] = useState("");
  const [dsiEmail, setDsiEmail] = useState("");
  const [proposalList, setProposalList] = useState<IClientProposal[]>([]);
  const [clickedProposal, setClickedProposal] = useState<
    IClientProposal | undefined
  >();

  const searchProposal = async () => {
    const datas = await getProposalByEmail(cliEmail);
    setProposalList(datas);
  };
  const matching = async (designerEmail: string, proposalId: number) => {
    await matchingDesigner(designerEmail, proposalId);
  };
  const onLogout = () => {
    authLogout().then(() => {
      delete axios.defaults.headers.common["Authorization"];
      queryClient.clear();
      localStorage.removeItem("recoil-persist");

      switch (userData?.provider) {
        case "KAKAO":
          return (window.location.href = KAKAO_AUTH_LOGOUT_URL);
        case "GOOGLE":
          return navigate("/");
      }
    });
  };
  useEffect(() => {
    let data = Array.from(
      { length: proposalData?.totalPages || 1 },
      (_, index) => index
    );
    setTotalPage(data);
  }, [proposalData]);
  useEffect(() => {
    if (
      proposalData?.totalPages &&
      currentPage < proposalData?.totalPages - 2
    ) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["proposal", nextPage], () =>
        getAllProposal(nextPage)
      );
    }
  }, [currentPage, proposalData?.totalPages, queryClient]);
  return (
    <>
      <Menu />
      <WholeContainer>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "12px",
          }}
        >
          <h1
            style={{ fontSize: "16px", marginBottom: "20px", height: "20px" }}
          >
            전체 제안서 리스트
          </h1>
          <SearchResult>
            <ProposalContainer>
              <p
                style={{
                  display: "flex",
                  flexBasis: "25%",
                  justifyContent: "center",
                }}
              >
                클라이언트 이메일
              </p>
              <p
                style={{
                  display: "flex",
                  flexBasis: "25%",
                  justifyContent: "center",
                }}
              >
                클라이언트 닉네임
              </p>
              <p
                style={{
                  display: "flex",
                  flexBasis: "25%",
                  justifyContent: "center",
                }}
              >
                제안서 제목
              </p>
              <p
                style={{
                  display: "flex",
                  flexBasis: "25%",
                  justifyContent: "center",
                }}
              >
                생성 날짜
              </p>
            </ProposalContainer>
            {proposalData?.contents.map((proposal) => {
              return (
                <ProposalContainer2
                  style={{ height: "31px" }}
                  key={proposal.proposalId}
                  onClick={() =>
                    window.open(
                      `https://98o7.com/proposal/${proposal.proposalId}`,
                      "_blank"
                    )
                  }
                >
                  <p
                    style={{
                      display: "flex",
                      flexBasis: "25%",
                      justifyContent: "center",
                    }}
                  >
                    {proposal.email}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexBasis: "25%",
                      justifyContent: "center",
                    }}
                  >
                    {proposal.nickname}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexBasis: "25%",
                      justifyContent: "center",
                    }}
                  >
                    {proposal.title}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      flexBasis: "25%",
                      justifyContent: "center",
                    }}
                  >
                    {moment.default(proposal.createdAt).format("YY / DD / MM")}
                  </p>
                </ProposalContainer2>
              );
            })}
          </SearchResult>
          <div>
            {totalPage?.map((page, index) => (
              <button key={index} onClick={() => setCurrentPage(page)}>
                {page + 1}
              </button>
            ))}
          </div>
        </Container>

        <Container>
          <Logout onClick={onLogout}>로그아웃</Logout>
          <ClientSearch>
            <label htmlFor="cli-email">클라이언트 이메일</label>
            <div>
              <input
                id="cli-email"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCliEmail(e.currentTarget.value)
                }
              />
              <button onClick={searchProposal}>검색</button>
            </div>
          </ClientSearch>
          <SearchResult>
            <ProposalContainer>
              <p
                style={{
                  display: "flex",
                  flexBasis: "25%",
                  justifyContent: "center",
                }}
              >
                제안서 아이디
              </p>
              <p
                style={{
                  display: "flex",
                  flexBasis: "50%",
                  justifyContent: "center",
                }}
              >
                제안서 제목
              </p>
              <p
                style={{
                  display: "flex",
                  flexBasis: "25%",
                  justifyContent: "center",
                }}
              >
                생성 날짜
              </p>
            </ProposalContainer>
            {proposalList &&
              proposalList.map((proposal) => {
                return (
                  <ProposalContainer
                    key={proposal.id}
                    onClick={() => setClickedProposal(proposal)}
                    clicked={clickedProposal?.id === proposal.id}
                  >
                    <p
                      style={{
                        display: "flex",
                        flexBasis: "25%",
                        justifyContent: "center",
                      }}
                    >
                      {proposal.id}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        flexBasis: "50%",
                        justifyContent: "center",
                      }}
                    >
                      {proposal.title}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        flexBasis: "25%",
                        justifyContent: "center",
                      }}
                    >
                      {moment
                        .default(proposal.createdAt)
                        .format("YY / DD / MM")}
                    </p>
                  </ProposalContainer>
                );
              })}
          </SearchResult>
          <DesignerMatch>
            <label style={{ marginRight: "20px" }} htmlFor="dsi-email">
              디자이너 이메일
            </label>
            <div>
              <input
                id="dsi-email"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDsiEmail(e.currentTarget.value)
                }
              />
              <button
                onClick={() =>
                  matching(dsiEmail, clickedProposal?.id!)
                    .then(() => alert("매칭 성공"))
                    .catch(() => alert("매칭 실패"))
                }
              >
                매칭
              </button>
            </div>
          </DesignerMatch>
        </Container>
      </WholeContainer>
    </>
  );
};

export default Admin;

const WholeContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
`;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 500px;
`;

const ClientSearch = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;
const SearchResult = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  overflow-y: scroll;
  margin-bottom: 20px;
`;
const DesignerMatch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ProposalContainer = styled.div<{ clicked?: boolean }>`
  background-color: ${(props) => (props.clicked ? "#EEEEEE" : "none")};
  display: flex;
  justify-content: space-around;
  padding: 5px;
  cursor: pointer;
  border-bottom: 1px solid #eeeeee;
`;
const Logout = styled.button`
  position: absolute;
  right: -100px;
`;
const ProposalContainer2 = styled(ProposalContainer)`
  &:hover {
    background-color: #eeeeee;
  }
`;
