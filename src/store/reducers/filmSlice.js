import { createSlice } from '@reduxjs/toolkit';

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    dataFilms: [],
    detailFilm: {},
  },
  reducers: {
    getFilms: (state, { payload }) => {
      state.dataFilms = payload;
    },
    getDetailFilm: (state, { payload }) => {
      state.detailFilm = payload;
    },
  },
});

export const { getFilms, getDetailFilm } = filmsSlice.actions;

export default filmsSlice.reducer;
