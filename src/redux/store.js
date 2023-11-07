import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../redux/slices/courseSlice";
import searchReducer from "../redux/slices/searchSlice";

const store = configureStore({
  reducer: {
    course: courseReducer,
    search: searchReducer,
  },
});

export default store;
