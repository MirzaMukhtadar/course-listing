import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: { courseList: [], defaultCourseList: [] },
  reducers: {
    setCourseList: (state, action) => {
      state.courseList = action.payload;
      state.defaultCourseList = action.payload;
    },
  },
});

export const { setCourseList } = courseSlice.actions;
export default courseSlice.reducer;
