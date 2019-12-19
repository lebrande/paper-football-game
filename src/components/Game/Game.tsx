import React, { FunctionComponent } from 'react';

import Point from '../Point/Point';
import { INITIAL_POINTS } from '../../initialPoints';

import './Game.scss';

type TProps = {};

const Game: FunctionComponent<TProps> = () => {
  return (
    <div className="Game">
      {INITIAL_POINTS.map((row, rowIndex) => (
        <div key={rowIndex} className="GameRow">
          {row.map((state, columnIndex) => (
            <Point
              key={columnIndex}
              state={state}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;