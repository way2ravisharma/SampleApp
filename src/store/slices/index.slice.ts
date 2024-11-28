import { configureStore } from "@reduxjs/toolkit";
import { commonSlice } from "./common.slice";

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
  },
});
