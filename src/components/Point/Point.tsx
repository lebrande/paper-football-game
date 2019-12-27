import React, { FunctionComponent } from 'react';
import clsx from 'clsx';

import { DIRECTIONS } from '../../directions';

import './Point.scss';

type TProps = {
  state: number;
  current: boolean;
  available: boolean;
  onClick: () => void;
};

const Point: FunctionComponent<TProps> = ({
  state,
  current,
  available,
  onClick,
}) => {
  return (
    <div
      className={clsx('Point', {
        ['PointAvailable']: available,
      })}
      onClick={onClick}
    >
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