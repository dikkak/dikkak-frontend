import axios from 'axios';

export const authLogin = async(provider: string, code: string) => {
  const url = `http://localhost:8080/api/auth/login/${provider}?code=${code}`
  const response = await axios.get<ILogin>(url);
  return response.data;
}

interface ILogin {
  message: string;
  data: {
    newUser: string;
    userId: string;
    accessToken: string;
    refreshToken: string;
  }
}