import axios from "axios";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getProposalByEmail,
  IClientProposal,
  matchingDesigner,
} from "../../apis/admin";
import { authLogout, userInfo } from "../../apis/auth_login";
import { KAKAO_AUTH_LOGOUT_URL } from "../../OAuth";
import Menu from "../../components/Menu";
import * as moment from "moment";

const Admin = () => {
  const { data } = useQuery("user-info", userInfo);
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

      switch (data?.provider) {
        case "KAKAO":
          return (window.location.href = KAKAO_AUTH_LOGOUT_URL);
        case "GOOGLE":
          return navigate("/");
      }
    });
  };
  return (
    <>
      <Menu />
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
          {proposalList.map((proposal) => {
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
                  {moment.default(proposal.createdAt).format("YY / DD / MM")}
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
            <button onClick={() => matching(dsiEmail, clickedProposal?.id!)}>
              매칭
            </button>
          </div>
        </DesignerMatch>
      </Container>
    </>
  );
};

export default Admin;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  width: 500px;
`;

const ClientSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;
const SearchResult = styled.div`
  width: 500px;
  min-height: 500px;
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
