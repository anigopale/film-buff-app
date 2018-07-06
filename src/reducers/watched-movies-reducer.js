import _ from 'lodash';
import { WATCH_MOVIE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case WATCH_MOVIE:
      if(!_.find(state, action.payload)) {
        // if movie isn't watched, add to watched list
        return [ action.payload, ...state];
      }
      break;

  }
  return state;
}
