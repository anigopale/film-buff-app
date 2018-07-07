import { FETCH_MOVIE, DELETE_MOVIE, LOADING_MOVIE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
      break;

    case DELETE_MOVIE:
      return {};
      break;

    case LOADING_MOVIE:
      return {
        loading: true
      };
      break;
  }
  return state;
}
