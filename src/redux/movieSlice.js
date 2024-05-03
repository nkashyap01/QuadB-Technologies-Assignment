import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    isOpen: false,
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setMovies, setIsOpen } = movieSlice.actions;

export default movieSlice.reducer;
