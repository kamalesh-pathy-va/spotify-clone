import { configureStore } from "@reduxjs/toolkit";
import sidenavSlice from "../features/sidenav/sidenavSlice";
import mainSlice from "../features/main/mainSlice";

const store = configureStore({
  reducer: {
    sidenav: sidenavSlice,
    mainContent: mainSlice,
  }
})

export default store;