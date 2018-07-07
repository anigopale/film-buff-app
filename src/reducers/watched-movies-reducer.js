import _ from 'lodash';
import { WATCH_MOVIE, DELETE_WATCHED, USER_FEEDBACK, LOAD_LOCAL_DATA } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case WATCH_MOVIE:
      if(!_.find(state, action.payload)) {
        let { Poster, Title, Year, Plot, Ratings } = action.payload;
        // if movie isn't watched, add to watched list, with like=null
        return [ { Poster, Title, Year, Plot, Ratings, like: null }, ...state];
      }
      break;

    case DELETE_WATCHED:
      // remove element from watched movies
      state.splice(action.payload, 1);
      return [ ...state];
      break;

    case USER_FEEDBACK:
      // grabbing index, value off of payload
      let { index, value } = action.payload;

      // retrieving appropriate WatchedMovieItem
      let { Poster, Title, Year, Plot, Ratings } = state[index];

      // update Movie data with user feedback
      state.splice(index, 1, { Poster, Title, Year, Plot, Ratings, like: value });
      return [ ...state];
      break;

    case LOAD_LOCAL_DATA:
      return action.payload;
      break;

  }
  return state;
}
