import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false
}

const sidenavSlice = createSlice({
  name: 'sidenavSlice',
  initialState,
  reducers: {
    collapse: (state) => {
      state.collapsed = true;
    },
    expand: (state) => {
      state.collapsed = false;
    }
  }
});

export default sidenavSlice.reducer;
export const { collapse, expand } = sidenavSlice.actions;
