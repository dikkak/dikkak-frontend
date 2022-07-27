import axios from 'axios'

export const submitProposal = async(data: FormData) => {
  const response = await axios.post('/proposal', data);
  return response.data;
}