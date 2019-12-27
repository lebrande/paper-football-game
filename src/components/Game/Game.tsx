import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { moveBallToPoint } from '../../reducers/game/actions';

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
  availableNextSteps: [number, number, number][],
  moveBallToPoint: (nextStepData: [number, number, number]) => void;
};

const Game: FunctionComponent<TInnerProps> = ({
  ballPossition,
  world,
  availableNextSteps,
  moveBallToPoint,
}) => {
  return (
    <div className="Game">
      {world.map((row, rowIndex) => (
        <div key={rowIndex} className="GameRow">
          {row.map((state, columnIndex) => {
            const current = ballPossition[0] === columnIndex && ballPossition[1] === rowIndex;
            const nextStepData = availableNextSteps.find((step) => step[1] === columnIndex && step[2] === rowIndex);
            const available = !!nextStepData;

            return (
              <Point
                key={columnIndex}
                state={state}
                current={current}
                available={available}
                onClick={() => !current && available ? moveBallToPoint(nextStepData) : null}
              />
            );
          })}
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

const mapDispatchToProps = {
  moveBallToPoint,
};

const enhance = compose<TInnerProps, TProps>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(Game);