import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./auth/authSlice";
import navigationBarReducer from "./navSlice";
export const mainStore = configureStore({
  reducer: { accessTokenReducer, navigationBarReducer },
});

export type RootState = ReturnType<typeof mainStore.getState>;
export type AppDispatch = typeof mainStore.dispatch;
