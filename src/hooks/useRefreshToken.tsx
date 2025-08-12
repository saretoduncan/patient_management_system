import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { TRefreshTokenResp } from "../types/authTypes";
import { CustomAxiosError } from "../types/commonTypes";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { navigationData } from "../utils/NavigationUtils";
import { ENavDataTitles } from "../types/NavigationTypes";

const useRefreshToken = () => {

  const navigate = useNavigate();
  const getRefreshToken = async (): Promise<string> => {
    const response: Promise<TRefreshTokenResp> = axios
      .post(
        `${BASE_URL}/auth/refreshToken`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        return data.data;
      })
      .catch((e: CustomAxiosError) => {
        toast.error(e.response?.data.message);
        navigate(navigationData.get(ENavDataTitles.LOGIN_PAGE)!!.url);
      });
    return (await response).accessToken;
  };
  return {getRefreshToken};
};

export default useRefreshToken;
