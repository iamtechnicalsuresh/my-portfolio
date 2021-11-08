import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stickyNav: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setStickyNav(state, action) {
      state.stickyNav = action.payload;
    },
  },
});

export const { setStickyNav } = navbarSlice.actions;

export default navbarSlice.reducer;
