import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setMoviesAsync } from '../store/actions/movies';
import baseUrl from '../api';
import Loading from '../components/Loading';
import { BrowserRouter as Router } from "react-router-dom";

function Home() {
  let history = useHistory();
  let movies = useSelector(state => state.movieReducer.movies);
  let search = useSelector(state => state.movieReducer.searchBar);
  let dispatch = useDispatch();
  let url = `${baseUrl}s=${search}`;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setMoviesAsync({
      url,
      setLoading
    }))
  }, [dispatch, search]);

  function GetMovie(param) {
    param[0].preventDefault();
    history.push(`/detail/${param[1]}`)
  }

  return (
    <Router>
      <div className="container">
        {search ? <p className="h1 title">Showing Movies from <span id="title-from-search">"{search}"</span></p> : null}
        {loading ? <Loading></Loading> :
          <div className="row">
            {movies.map((movie, i) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={i}>
                  <div className="card set-card">
                    <img href="#" src={movie.Poster} alt="logo" />
                    <a href="#" onClick={(event) => { GetMovie([event, movie.imdbID]) }}>
                      <b>{movie.Title}</b>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        }
      </div>
    </Router>
  )
}

export default Home;