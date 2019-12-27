const PREFIX = 'game';

export type TGameState = {
  world: number[][],
  ballPosition: [number, number],
};

export const MOVE_BALL_TO_POINT = `${PREFIX}/MOVE_BALL_TO_POINT`;

export type TMoveBallToPointAction = {
  type: typeof MOVE_BALL_TO_POINT;
  payload: {
    nextStepData: [number, number, number];
  };
}

export type TGameActionTypes = TMoveBallToPointAction;