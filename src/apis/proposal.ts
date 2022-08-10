import axios from 'axios'

export const submitProposal = async(data: FormData) => {
  const response = await axios.post('/proposal', data);
  return response.data;
}

export const getProposal = async(proposalId: string) => {
  const response = await axios.get<IPropsoal>(`/proposal/${proposalId}`);
  return response.data;
}

export interface IPropsoal {
  client:         string;
  title:          string;
  category:       string;
  detail?:         string;
  purpose:        string;
  deadline:       string;
  keywords:       string[];
  mainColor:      string;
  subColors?:      string[];
  referenceFile:  IReferenceFile[];
  etcFile?:        IEtcFile[];
  additionalDesc?: string;
}

export interface IReferenceFile {
  url: string;
  fileName: string;
  description: string;
}
export interface IEtcFile {
  url: string;
  fileName: string;
}