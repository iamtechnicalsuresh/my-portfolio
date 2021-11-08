import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./miscellaneous/navbarSlice";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
