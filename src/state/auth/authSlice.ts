import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../types/authTypes";

type TAuthState = {
  accessToken: string | null;
  user: TUser | null;
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
    updateUser: (state, action: PayloadAction<TUser>) => {
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
