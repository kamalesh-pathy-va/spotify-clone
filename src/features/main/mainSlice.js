import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainWidth: 0,
  mainHeight: 0,
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.mainHeight = action.payload.height;
      state.mainWidth = action.payload.width;
    }
  }
});

export default mainSlice.reducer;
export const { setSize } = mainSlice.actions;
