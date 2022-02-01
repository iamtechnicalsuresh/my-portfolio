import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./miscellaneous/navbarSlice";
import contactSlices from "./contactSlices/contactSlices";

const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    contacts: contactSlices,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
