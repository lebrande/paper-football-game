import { combineReducers } from 'redux';

import { gameReducer } from './reducers/game/reducer';
import { TGameState } from './reducers/game/types';

export const rootReducer = combineReducers({
  game: gameReducer,
})

export type RootState = {
  game: TGameState;
};