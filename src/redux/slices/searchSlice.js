// Create a "search" slice for your search query and filtered course list.
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchQuery: "", filteredCourseList: [] },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilteredCourseList: (state, action) => {
      state.filteredCourseList = action.payload;
    },
  },
});

export const { setSearchQuery, setFilteredCourseList } = searchSlice.actions;
export default searchSlice.reducer;
