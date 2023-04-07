import axios, { AxiosError } from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BASE_URL
    : process.env.REACT_APP_DEV_BASE_URL;

let refresh = false;

axios.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.get("auth/refresh", {
        withCredentials: true,
      });
      if (response.status === 200) {
        localStorage.setItem("token", `Bearer ${response.data.accessToken}`);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        return axios(error.config);
      }
    }
    if (error.response?.status === 409 && !refresh) {
      return Promise.reject(error);
    }
    if (error.response?.status === 400 && !refresh) {
      return Promise.reject(error);
    }
    refresh = false;
    return error;
  }
);
