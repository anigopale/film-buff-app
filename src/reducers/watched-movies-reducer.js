import { WATCH_MOVIE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case WATCH_MOVIE:
      return [ action.payload, ...state];
      break;

  }
  return state;
}
