import { configureStore } from "@reduxjs/toolkit";
import sidenavSlice from "../features/sidenav/sidenavSlice";

const store = configureStore({
  reducer: {
    sidenav: sidenavSlice,
  }
})

export default store;