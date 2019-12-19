export const GAME_STORE_KEY = 'game';

export type TGameState = {
  width: number;
  height: number;
};

export const INIT_GAME = `${GAME_STORE_KEY}/INIT_GAME`;

export type TInitGameAction = {
  type: typeof INIT_GAME;
}

export type TGameActionTypes = TInitGameAction;