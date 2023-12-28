import React from 'react';
import { arc } from 'd3';
import { BackGroundCircle } from './BackGroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

const Home = () => {

  const width = 960;
  const height = 500;
  const centerX = width / 2; 
  const centerY = height / 2; 
  const strokeWidth = 10;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 40;
  const mouthWidth = 20;
  const mouthRadius = 140;

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <BackGroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
          <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}/>
          <Mouth mouthWidth={mouthWidth} mouthRadius={mouthRadius}/>
        </g>
      </svg>
    </div>
  );
};

export default Home;