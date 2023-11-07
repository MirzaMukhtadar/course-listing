// selectedCourseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const selectedCourseSlice = createSlice({
  name: "selectedCourse",
  initialState: null,
  reducers: {
    setSelectedCourse: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedCourse } = selectedCourseSlice.actions;
export default selectedCourseSlice.reducer;
