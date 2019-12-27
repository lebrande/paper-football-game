import { createSelector } from 'reselect';

import { RootState } from "../../rootReducer";
import { TGameState } from './types';
import { DIRECTIONS } from '../../directions';
import { DISABLED_FIELD } from '../../disabledFields';
import { DIRECTION_TRANSFORMATIONS } from '../../directionTransformations';

export const gameSelector = ({ game }: RootState) => game;

export const ballPositionSelector = createSelector<
  RootState,
  TGameState,
  [number, number]
>(
  gameSelector,
  ({ ballPosition }) => ballPosition, 
);

export const worldSelector = createSelector<
  RootState,
  TGameState,
  TGameState['world']
>(
  gameSelector,
  ({ world }) => world, 
);

export const availableNextStepsSelector = createSelector<
  RootState,
  TGameState['world'],
  [number, number],
  number[][]
>(
  worldSelector,
  ballPositionSelector,
  (world, ballPosition) => {
    const currentState = world[ballPosition[1]][ballPosition[0]];
    const availableNextSteps = DIRECTIONS
      .map((direction, index) => {
        if (direction & currentState) {
          return null;
        }

        const nextX = ballPosition[0] + DIRECTION_TRANSFORMATIONS[index][0];
        const nextY = ballPosition[1] + DIRECTION_TRANSFORMATIONS[index][1];

        if (
          nextX >= 0 && nextX <= 6
          && nextY >= 0 && nextY <= 10
        ) {
          return [
            nextX,
            nextY,
          ];
        }

        return null;
      })
      .filter((value) => !!value)
      .filter(([x, y]) => !DISABLED_FIELD.some(([disabledX, disabledY]) => x === disabledX && y === disabledY));

    return availableNextSteps;
  },
);