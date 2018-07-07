import { combineReducers } from 'redux';
import movieData from './movie-reducer';
import watchedMovies from './watched-movies-reducer';

const rootReducer = combineReducers({
  movieData,
  watchedMovies
});

export default rootReducer;
