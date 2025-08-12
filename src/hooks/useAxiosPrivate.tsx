import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const useAxiosPrivate = () => {
  const {getRefreshToken} = useRefreshToken();
  const accessToken = useSelector(
    (state: RootState) => state.accessTokenReducer.accessToken
  );
  const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });

  useEffect(() => {
    const requestInterceptors = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[`Authorization`] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await getRefreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptors);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [getRefreshToken]);

  return axiosPrivate;
};
export default useAxiosPrivate;
