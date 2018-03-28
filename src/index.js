import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import App from './App.js';
import {add} from './actions'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(add('pierwszy komentarz', 'mateusz'));
store.dispatch(add('drugi komentarz', 'mateusz'));
