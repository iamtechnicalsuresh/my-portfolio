import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stickyNav: false,
  themeSwitch: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setStickyNav(state, action) {
      state.stickyNav = action.payload;
    },
    setThemeSwitch(state, action) {
      state.themeSwitch = action.payload;
    },
  },
});

export const { setStickyNav, setThemeSwitch } = navbarSlice.actions;

export default navbarSlice.reducer;
