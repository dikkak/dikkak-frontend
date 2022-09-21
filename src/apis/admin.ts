import axios from "axios";

export const getAllProposal = async (page: number = 0) => {
  const response = await axios.get<ProposalList>(
    `/admin/proposal/list?page=${page}`
  );
  return response.data;
};

export const getProposalByEmail = async (email: string) => {
  const data = { email };
  const response = await axios.post<IClientProposal[]>(
    "/admin/user/proposals",
    data
  );
  return response.data;
};
export const matchingDesigner = async (
  designerEmail: string,
  proposalId: number
) => {
  const data = {
    proposalId,
    designerEmail,
  };
  const response = await axios.post("/admin/proposal/designer", data);
  return response.data;
};

export interface IClientProposal {
  id: number;
  title: string;
  createdAt: string;
}
export interface ProposalList {
  totalPages: number;
  totalCount: number;
  page: number;
  size: number;
  contents: Content[];
}

export interface Content {
  proposalId: number;
  email: string;
  nickname: string;
  title: string;
  createdAt: Date;
}
