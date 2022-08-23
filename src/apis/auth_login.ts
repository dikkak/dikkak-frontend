import axios from "axios";

export const userInfo = async () => {
  const response = await axios.get<IUserInfo>("user/info");
  return response.data;
};

export const authLogin = async (provider: string, code: string) => {
  const url = `auth/login/${provider}?code=${code}`;
  const { data } = await axios.get<ILogin>(url, { withCredentials: true });
  return data;
};
export const registNewUser = async (data: IForm) => {
  try {
    const response = await axios.post<IForm>("user/register", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const registType = async (type: string) => {
  const data = {
    type,
  };
  try {
    const response = await axios.post<IType>("/user/type", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const authLogout = async () => {
  const response = await axios.get("auth/logout", { withCredentials: true });
  return response;
};

interface IUserInfo {
  email: string;
  username: string;
  type: string;
  provider: string;
  phoneNumber: string;
  marketingMessage: boolean;
  popUpMessage: boolean;
}

interface ILogin {
  username: string;
  accessToken: string;
}
interface IForm {
  username: string;
  phoneNumber: string;
  termsConditions: boolean;
  dataPolicy: boolean;
  popUpMessage: boolean;
  marketingMessage: boolean;
}
interface IType {
  type: string;
}
