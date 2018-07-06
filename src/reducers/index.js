import { combineReducers } from 'redux';
import movieData from './movie-reducer';

const rootReducer = combineReducers({
  movieData
});

export default rootReducer;
