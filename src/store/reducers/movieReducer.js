const initialState = {
  movies: [],
  oneMovie: {},
  searchBar: 'harry potter'
}

function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  
  if (type === 'movies/setMovies') {
    return { ...state, movies: payload }
  } else if (type === 'searchBar/setSearchBar') {
    return { ...state, searchBar: payload }
  } else if (type === 'oneMovie/setOneMovie') {
    return { ...state, oneMovie: payload }
  } 

  return state
}

export default movieReducer;