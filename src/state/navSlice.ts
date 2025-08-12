import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TNavState = {
  isOpen: boolean;
  currentPage: string;
};
const initialState: TNavState = {
  isOpen: false,
  currentPage: "",
};

const NavStateSlice = createSlice({
  name: "Navigation Bar State",
  initialState,
  reducers: {
    switchSideNav: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSideNav: (state) => {
      state.isOpen = false;
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});
export const { switchSideNav, closeSideNav, setCurrentPage } = NavStateSlice.actions;

export default NavStateSlice.reducer;
