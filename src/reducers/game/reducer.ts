import {
  TGameState,
  TGameActionTypes,
  MOVE_BALL_TO_POINT,
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
    case MOVE_BALL_TO_POINT: {
      return {
        ...state,
        ballPosition: action.payload.point,
      }
    }
    default:
      return state
  }
}