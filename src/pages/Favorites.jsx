import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../store/actions/favorites';
import { useHistory } from 'react-router-dom';

export default function Favorites() {
  let favorites = useSelector(state => state.favoritesReducer.favorites);
  let dispatch = useDispatch();
  let afterDelete = [];
  let history = useHistory();

  function removeFav(params) {
    params[0].preventDefault();

    afterDelete = favorites.filter(favorite => favorite.imdbID != params[1]);
    console.log(afterDelete)
    dispatch(deleteFavorite(afterDelete));
  }

  function GetMovie(param) {
    param[0].preventDefault();
    history.push(`/detail/${param[1]}`)
  }

  return (
    <div className="container">
      <b className="h2">My Favorite Movies</b>
      <div className="row mt-3">
        {favorites.map((favorite, i) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={i}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(event) => { removeFav([event, favorite.imdbID]) }}>
                <span aria-hidden="true">&times;</span>
              </button>
              <span class="glyphicon glyphicon-search">No. {i + 1}</span>
              <div className="card set-card">
                <img href="#" src={favorite.Poster} alt="logo" />
                <a href="#" onClick={(event) => { GetMovie([event, favorite.imdbID]) }}>
                  <b>{favorite.Title}</b>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
