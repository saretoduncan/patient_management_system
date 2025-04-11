import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TLoginResponse } from "../../types/authTypes";

type TAuthState = {
  accessToken: string | null;
  user: TLoginResponse | null;
};

const initialAuthState: TAuthState = {
  accessToken: null,
  user: null,
};

const accessTokenSlice = createSlice({
  name: "access token",
  initialState: initialAuthState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    updateUser: (state, action: PayloadAction<TLoginResponse>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});
export const { updateAccessToken, updateUser, logout } =
  accessTokenSlice.actions;
export default accessTokenSlice.reducer;
