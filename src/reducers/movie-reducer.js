import { FETCH_MOVIE } from '../actions';

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;
      break;
  }
  return state;
}
