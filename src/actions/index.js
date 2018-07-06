export const FETCH_MOVIE = 'fetch-movie';

export function fetchMovie(term) {
  return function(dispatch) {
    const url = `http://www.omdbapi.com/?t=${term}&apikey=aabca0d`;
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch({
        type: FETCH_MOVIE,
        payload: data
      })
    });
  }
}
