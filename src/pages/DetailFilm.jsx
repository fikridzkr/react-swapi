/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getDetailFilms } from '../services/films';

function DetailFilm({ setLoading }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.detailFilm);
  useEffect(() => {
    getDetailFilms(dispatch, id, setLoading);
  }, [dispatch]);
  return (
    <>
      {films ? (
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="text-center mb-3">{films.title}</h4>
                <ul>
                  <li>
                    Release : <span>{films.release_date}</span>
                  </li>
                  <li>
                    Director : <span>{films.director}</span>
                  </li>
                  <li>
                    Producer : <span>{films.producer}</span>
                  </li>
                </ul>
                <p>{films.opening_crawl}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default DetailFilm;
