import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';
import { LOAD_LOCAL_DATA } from './actions';
import { loadState, saveState } from './services/localStore';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

const persistedState = loadState();

// check if state exists in localStorage
// if true, load data into watchedMovies reducer
if (persistedState) {
  store.dispatch({
    type: LOAD_LOCAL_DATA,
    payload: persistedState.watchedMovies
  });
}

// save state into localStorage on action dispatch
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
