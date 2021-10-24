import axios from 'axios';
import { getDetailFilm, getFilms } from '../store/reducers/filmSlice';

export const getDataFilms = async (dispatch, setLoading) => {
  try {
    setLoading(true);
    const response = await axios({
      method: 'GET',
      url: `https://swapi.dev/api/films`,
    });
    setLoading(false);
    dispatch(getFilms(response.data.results));
  } catch (error) {
    setLoading(false);
  }
};
export const getDetailFilms = async (dispatch, id, setLoading) => {
  try {
    dispatch(getDetailFilm({}));
    setLoading(true);
    const response = await axios({
      method: 'GET',
      url: `https://swapi.dev/api/films/${id}`,
    });
    dispatch(getDetailFilm(response.data));
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};
