import axios from "axios";
import { toast } from "react-toastify";
import { TLoginReq, TLoginResponse } from "../../types/authTypes";
import { CustomAxiosError } from "../../types/commonTypes";
import { BASE_API } from "../../utils/Constants";

export const handleLogin = async (
  loginReq: TLoginReq
): Promise<TLoginResponse> => {
  return axios
    .post(`${BASE_API}/auth/login`, {
      username: loginReq.username,
      password: loginReq.password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e: CustomAxiosError) => {
      if (e.response)
        toast.error(e.response.data.message, { autoClose: false });
    });
};
