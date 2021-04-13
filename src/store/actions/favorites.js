export function setFavorites(payload) {
  return { type: 'favorites/setFavorites', payload }
}

export function deleteFavorite(payload) {
  return { type: 'favorites/deleteItemFavorite', payload }
}