import axios from "axios";

// 클라이언트 작업실 리스트 조회 api
export const getProposalList = async () => {
  const response = await axios.get<IClientWorkspcaeList>(
    "/workspace/client/list"
  );
  return response.data.clientWorkplace;
};

// 디자이너 작업실 리스트 조회 api
export const getWorkplaceList = async () => {
  const response = await axios.get<IDesignerWorkspaceList>(
    "/workplace/designer/list"
  );
  return response.data;
};

export interface IClientWorkspaceItem {
  proposalId: number;
  proposalTitle: string;
  coworkingId?: number;
  designerName?: string;
  coworkingStep?: string;
}
export interface IClientWorkspcaeList {
  clientWorkplace: IClientWorkspaceItem[];
}

export interface IDesignerWorkspaceItem {
  proposalId: number;
  proposalTitle: string;
  coworkingId: number;
  clientName: string;
  coworkingStep: string;
}
export interface IDesignerWorkspaceList {
  complete: IDesignerWorkspaceItem[];
  progress: IDesignerWorkspaceItem[];
}
