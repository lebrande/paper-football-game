import {
  TGameState,
  TGameActionTypes,
  INIT_GAME,
} from './types';
import { INITIAL_POINTS } from '../../initialPoints';

const initialState: TGameState = {
  world: INITIAL_POINTS,
  ballPosition: [3, 5],
}

export const gameReducer = (
  state = initialState,
  action: TGameActionTypes,
): TGameState => {
  switch (action.type) {
    case INIT_GAME: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}