/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataFilms } from '../services/films';

function Home({ setLoading }) {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.dataFilms);
  useEffect(() => {
    getDataFilms(dispatch, setLoading);
  }, [dispatch]);
  return (
    <Fragment>
      <h1 className="text-center mb-3">List Films</h1>
      <div className="row">
        {films
          ? films.map((item, index) => {
              return (
                <div className="col-md-4 mb-2" key={index}>
                  <Link
                    to={`detail/${index + 1}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card bg-warning">
                      <div className="card-body">
                        <h4 className="text-center mb-3">{item.title}</h4>
                        <ul>
                          <li>
                            Release : <span>{item.release_date}</span>
                          </li>
                          <li>
                            Director : <span>{item.director}</span>
                          </li>
                          <li>
                            Producer : <span>{item.producer}</span>
                          </li>
                        </ul>
                        <p>{item.opening_crawl}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : ''}
      </div>
    </Fragment>
  );
}

export default Home;
