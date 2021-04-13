import swal from 'sweetalert';

export function setMovies(payload) {
  return { type: 'movies/setMovies', payload }
}

export function setMoviesAsync({ url, setLoading }) {
  return (dispatch) => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(({ Search }) => {
        dispatch(setMovies(Search));
      })
      .catch(err => {
        swal({
          title: "Failed!",
          text: `Invalid search!`,
          icon: "error",
          button: "Oke",
        });
        console.log(err);
      })
      .finally(_ => {
        setLoading(false);
      })
  }
}

export function setOneMovie(payload) {
  return { type: 'oneMovie/setOneMovie', payload }
}

export function setOneMovieAsync({ url, setLoading }) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(setOneMovie(data))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
        setLoading(false)
      })
  }
}
