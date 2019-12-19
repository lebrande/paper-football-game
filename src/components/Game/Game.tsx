import React, { FunctionComponent } from 'react';
import Ball from '../Ball/Ball';

import './Game.scss';

type TProps = {};

const Game: FunctionComponent<TProps> = () => {
  return (
    <div
      className="Game"
      style={{
        width: 400,
        height: 400,
      }}
    >
      <Ball />
    </div>
  );
};

export default Game;