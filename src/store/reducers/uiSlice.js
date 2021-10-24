import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
  },
  reducers: {
    loading: (state) => {
      state.loading = state.loading ? false : true;
    },
  },
});

export const { loading } = uiSlice.actions;

export default uiSlice.reducer;
