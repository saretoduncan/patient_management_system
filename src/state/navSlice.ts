import { createSlice } from "@reduxjs/toolkit";

type TNavState = {
  isOpen: boolean;
};
const initialState: TNavState = {
  isOpen: false,
};

const NavStateSlice = createSlice({
  name: "Navigation Bar State",
  initialState,
  reducers: {
    switchSideNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { switchSideNav } = NavStateSlice.actions;

export default NavStateSlice.reducer;
