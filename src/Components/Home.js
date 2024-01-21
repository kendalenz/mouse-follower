import React from 'react';

const width = 960;
const height = 500;
const circleX = width / 2;
const cicleY = height / 2;
const circleRadius = 30;

const Home = () => (
  <div>
    <svg width={width} height={height}>
      <circle
        cx={circleX}
        cy={cicleY}
        r={circleRadius}
      >
      </circle>
    </svg>
  </div>
);

export default Home;
