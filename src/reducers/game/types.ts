const PREFIX = 'game';

export type TGameState = {
  world: number[][],
  ballPosition: [number, number],
};

export const INIT_GAME = `${PREFIX}/INIT_GAME`;

export type TInitGameAction = {
  type: typeof INIT_GAME;
}

export type TGameActionTypes = TInitGameAction;