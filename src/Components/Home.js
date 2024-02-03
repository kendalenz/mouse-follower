import React from 'react';

const width = 960;
const height = 500;
const circleX = width / 2;
const cicleY = height / 2;
const circleRadius = 30;

const handleMouseMove = (event) => {
  const {clientX, clientY} = event;
  console.log(event.clientX)
  console.log(event.clientY)
}

const Home = () => (
  <div>
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
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
