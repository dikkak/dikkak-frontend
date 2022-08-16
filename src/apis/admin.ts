import axios from "axios";
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
