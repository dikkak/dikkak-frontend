import axios from 'axios'

export const getProposalList = async() => {
  const response = await axios.get<IWorkspcaeList>('/workplace/list');
  return response.data;
}

export interface IWorkspcaeList {
  proposals?: Proposal[];
  works?:     Work[];
}

export interface Proposal {
  id:    number;
  title: string;
}

export interface Work {
  id:       number;
  title:    string;
  complete: boolean;
}
