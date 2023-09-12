import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainWidth: 0,
  mainHeight: 0,
  mainTop: 0,
  mainLeft: 0,
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.mainHeight = action.payload.height;
      state.mainWidth = action.payload.width;
    },
    setScroll: (state, action) => {
      state.mainTop = action.payload.top;
      state.mainLeft = action.payload.left;
    }
  }
});

export default mainSlice.reducer;
export const { setSize, setScroll } = mainSlice.actions;
