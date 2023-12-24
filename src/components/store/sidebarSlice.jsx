import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state, actions) => {
      state.sidebarOpen = actions.payload;
    },
  },
});

export const {toggleSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;
