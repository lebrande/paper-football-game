import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

import { DIRECTIONS } from '../../directions';

import './Point.scss';

type TProps = {
  state: number;
  current: boolean;
  available: boolean;
};

const Point: FunctionComponent<TProps> = ({
  state,
  current,
  available,
}) => {
  return (
    <div className={clsx('Point', {
      ['PointAvailable']: available,
    })}>
      {current && <div className="PointBall" />}
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