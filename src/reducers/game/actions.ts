import { TMoveBallToPointAction, MOVE_BALL_TO_POINT } from './types';

export const moveBallToPoint = (nextStepData: [number, number, number]): TMoveBallToPointAction => ({
  type: MOVE_BALL_TO_POINT,
  payload: {
    nextStepData,
  },
});