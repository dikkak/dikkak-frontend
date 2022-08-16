import axios from "axios";

// 클라이언트 작업실 리스트 조회 api
export const getProposalList = async () => {
  const response = await axios.get<IClientWorkspcaeList>(
    "/workplace/client/list"
  );
  return response.data.clientWorkplace;
};

// 디자이너 작업실 리스트 조회 api
export const getWorkplaceList = async () => {
  const response = await axios.get<IDesignerWorkspaceList>(
    "/workplace/designer/list"
  );
  return response.data.desigerWorkplace;
};

export interface IClientWorkspaceItem {
  proposalId: number;
  proposalTitle: string;
  coworkingId?: number;
  designerName?: string;
  coworkingStep?: number;
}
export interface IClientWorkspcaeList {
  clientWorkplace: IClientWorkspaceItem[];
}

export interface IDesignerWorkspaceItem {
  proposalId: number;
  proposalTitle: string;
  coworkingId: number;
  clientName: string;
  coworkingStep: number;
}
export interface IDesignerWorkspaceList {
  desigerWorkplace: IDesignerWorkspaceItem[];
}
