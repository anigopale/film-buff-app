import _ from 'lodash';
import { WATCH_MOVIE, DELETE_WATCHED } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case WATCH_MOVIE:
      if(!_.find(state, action.payload)) {
        // if movie isn't watched, add to watched list
        return [ action.payload, ...state];
      }
      break;

    case DELETE_WATCHED:
      // remove element from watched movies
      state.splice(action.payload, 1);
      return [ ...state];
      break;

  }
  return state;
}
