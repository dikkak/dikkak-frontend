import axios from 'axios';

export const authLogin = async(provider: string, code: string) => {
  const url = `auth/login/${provider}?code=${code}`
  const response = await axios.get<ILogin>(url, {withCredentials: true});
  return response.data;
}
export const registNewUser = async(data: IForm) => {
  try {
    const response = await axios.post<IForm>('user/register', data);
    return response.data;
  } catch(error) {
    return error;
  };
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
interface IForm {
  username: string;
  phoneNumber: string;
  termsConditions: boolean;
  dataPolicy: boolean;
  popUpMessage: boolean;
  marketingMessage: boolean;
}