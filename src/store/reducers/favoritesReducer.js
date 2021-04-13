const initialState = {
  favorites: []
}

function favoritesReducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === 'favorites/setFavorites') {
    return { ...state, favorites: [...state.favorites, payload]}
  } else if (type === 'favorites/deleteItemFavorite'){
    return { ...state, favorites: payload }
  }

  return state;
}

export default favoritesReducer;