import { configureStore } from '@reduxjs/toolkit';
import { filmsSlice } from './reducers/filmSlice';
import { uiSlice } from './reducers/uiSlice';

export default configureStore({
  reducer: {
    ui: uiSlice.reducer,
    films: filmsSlice.reducer,
  },
});
