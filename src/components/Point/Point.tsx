import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

import { DIRECTIONS } from '../../directions';

import './Point.scss';

type TProps = {
  state: number;
};

const Point: FunctionComponent<TProps> = ({
  state,
}) => {
  return (
    <div className="Point">
      {DIRECTIONS.map((direction) => direction & state ? (
        <div
          key={direction}
          className={clsx('PointDirection', `PointDirection--${direction}`)}
        />
      ) : null)}
    </div>
  );
};

export default Point;