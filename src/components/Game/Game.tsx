import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

import Point from '../Point/Point';

import './Game.scss';
import {
  ballPositionSelector,
  worldSelector,
  availableNextStepsSelector,
} from '../../reducers/game/selectors';

type TProps = {};
type TInnerProps = TProps & {
  ballPossition: [number, number],
  world: number[][];
  availableNextSteps: [number, number][],
};

const Game: FunctionComponent<TInnerProps> = ({
  ballPossition,
  world,
  availableNextSteps,
}) => {
  return (
    <div className="Game">
      {world.map((row, rowIndex) => (
        <div key={rowIndex} className="GameRow">
          {row.map((state, columnIndex) => (
            <Point
              key={columnIndex}
              state={state}
              current={ballPossition[0] === columnIndex && ballPossition[1] === rowIndex}
              available={availableNextSteps.some((step) => step[0] === columnIndex && step[1] === rowIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  ballPossition: ballPositionSelector,
  world: worldSelector,
  availableNextSteps: availableNextStepsSelector,
});

const enhance = compose<TInnerProps, TProps>(
  connect(
    mapStateToProps,
  ),
);

export default enhance(Game);