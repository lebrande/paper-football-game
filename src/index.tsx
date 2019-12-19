import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './components/Game/Game';
import { configureStore } from './store';

import './style.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('game'),
);


