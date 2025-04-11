import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAccessTokenState = {
  accessToken: string;
};

const initialToken: TAccessTokenState = {
  accessToken: "",
};

const accessTokenSlice = createSlice({
  name: "access token",
  initialState: initialToken,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});
export const { updateAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
