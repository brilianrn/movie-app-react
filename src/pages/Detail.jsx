import React from 'react';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import baseUrl from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setOneMovieAsync } from '../store/actions/movies';
import { setFavorites } from '../store/actions/favorites';
import Loading from '../components/Loading';

export default function Detail() {
  const { id } = useParams();
  const url = `${baseUrl}i=${id}`;

  const [loading, setLoading] = useState(true);

  let dispatch = useDispatch();
  let movie = useSelector(state => state.movieReducer.oneMovie);
  let favorites = useSelector(state => state.favoritesReducer.favorites);

  useEffect(() => {
    dispatch(setOneMovieAsync({
      url,
      setLoading
    }))
  }, [])

  function addFav(params) {
    params[0].preventDefault();
    if (!favorites.length) {
      dispatch(setFavorites(params[1]));
      swal({
        title: "Success!",
        text: `${params[1].Title} added to favorites`,
        icon: "success",
        button: "Oke",
      });
    } else {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].imdbID != params[1].imdbID) {
          dispatch(setFavorites(params[1]));
          swal({
            title: "Success!",
            text: `${params[1].Title} added to favorites`,
            icon: "success",
            button: "Oke",
          });
        } else {
          swal({
            title: "Failed!",
            text: `${params[1].Title} already exist on your favorites list`,
            icon: "error",
            button: "Oke",
          });
        }
      }
    }
  }

  return (
    <div className="container">
      {loading ? <Loading></Loading> :
        <>
          <div className="card-detail mb-lg-5">
            <div className="card set-card">
              <a href="#" className="btn btn-outline-success mb-1" id="add-fav" onClick={(event) => { addFav([event, movie]) }}>Add to Favorites</a>
              <img href="#" src={movie.Poster} alt="logo" id="img-detail" />
            </div>
          </div>
          <div className="card-detail">
            <div className="card p-2">
              <b className="h3">{movie.Title}</b>
              <div className="container">
                <div className="mb-3">
                  <label>Released on :</label>
                  <input type="text" className="form-control" disabled value={movie.Released} />
                </div>
                <div className="mb-3">
                  <label>Duration :</label>
                  <input type="text" className="form-control" disabled value={movie.Runtime} />
                </div>
                <div className="form-floating">
                  <label for="floatingTextarea">Actors :</label>
                  <textarea className="form-control" id="floatingTextarea" disabled value={movie.Actors} />
                </div>
                <div className="mb-3">
                  <label>Writer :</label>
                  <input type="text" className="form-control" disabled value={movie.Writer} />
                </div>
                <div className="mb-3">
                  <label>Rating :</label>
                  <input type="text" className="form-control" disabled value={`${movie.imdbRating} from 10`} />
                </div>
                <div className="form-floating">
                  <label for="floatingTextarea">Plot :</label>
                  <textarea className="form-control" id="floatingTextarea" disabled>{movie.Plot}</textarea>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}
