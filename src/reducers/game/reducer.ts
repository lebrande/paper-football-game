import {
  TGameState,
  TGameActionTypes,
  INIT_GAME,
} from './types';

const initialState: TGameState = {
  width: 500,
  height: 500,
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