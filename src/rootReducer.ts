import { combineReducers } from 'redux';

import { GAME_STORE_KEY } from './reducers/game/types';
import { gameReducer } from './reducers/game/reducer';

export const rootReducer = combineReducers({
  [GAME_STORE_KEY]: gameReducer,
})

export type RootState = {};