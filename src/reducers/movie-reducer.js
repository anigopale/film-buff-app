import { FETCH_MOVIE, DELETE_MOVIE } from '../actions';

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
      break;
    case DELETE_MOVIE:
      return {};
      break;
  }
  return state;
}
