import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import useRefreshToken from "./useRefreshToken";
import { updateAccessToken } from "../state/auth/authSlice";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isLoggedIn, SetLoggedIn] = useState<boolean>(false);
  const accessToken = useSelector(
    (state: RootState) => state.accessTokenReducer.accessToken
  );
  const tokenDispatcher = useDispatch();
  const { getRefreshToken } = useRefreshToken();
  const handleAccessToken = async () => {
    if (!accessToken) {
      const newAcctoken = await getRefreshToken();
      tokenDispatcher(updateAccessToken(newAcctoken));
      SetLoggedIn(true);
    }
    SetLoggedIn(true);
  };

  return { isLoggedIn, SetLoggedIn, handleAccessToken };
};

export default useAuth;
