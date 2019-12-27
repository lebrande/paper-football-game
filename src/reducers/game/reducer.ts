import {
  TGameState,
  TGameActionTypes,
  MOVE_BALL_TO_POINT,
} from './types';
import { INITIAL_POINTS } from '../../initialPoints';
import { getUpdatedWorld } from '../../lib/getUpdatedWorld';

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
      const [direction, x, y] = action.payload.nextStepData;
      const [oldX, oldY] = state.ballPosition;
      const incomingDirection = direction >= 16 ? direction >> 4 : direction << 4;

      const updatedWorld = getUpdatedWorld(
        state.world,
        [oldX, oldY],
        direction,
      );

      const newWorld = getUpdatedWorld(
        updatedWorld,
        [x, y],
        incomingDirection,
      );

      return {
        ...state,
        ballPosition: [x, y],
        world: newWorld,
      }
    }
    default:
      return state
  }
}