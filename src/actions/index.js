export const FETCH_MOVIE = 'fetch-movie';
export const DELETE_MOVIE = 'delete-movie';
export const WATCH_MOVIE = 'watch-movie';
export const LOADING_MOVIE = 'loading-movie';
export const DELETE_WATCHED = 'delete-watched';
export const USER_FEEDBACK = 'user-feedback';
export const LOAD_LOCAL_DATA = 'load-local-data';

export function fetchMovie(term) {
  return function(dispatch) {
    const url = `https://www.omdbapi.com/?t=${term}&apikey=aabca0d`;

    dispatch({
      type: LOADING_MOVIE
    })

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

export function deleteMovie() {
  return {
    type: DELETE_MOVIE
  };
}

export function addToWatchedList(movie) {
  return {
    type: WATCH_MOVIE,
    payload: movie
  };
}


export function deleteWatched(title) {
  return {
    type: DELETE_WATCHED,
    payload: title
  };
}

export function giveFeedback(index, value) {
  return {
    type: USER_FEEDBACK,
    payload: {
      index,
      value
    }
  };
}

export function showWatchedMovie(movie) {
  return {
    type: FETCH_MOVIE,
    payload: movie
  }
}
