import React from 'react';
import { Face } from './Face';
import { range } from 'd3';

const width = 166;
const height = 166;

const array = range(100);

const Home = () => array.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={10}
      eyeOffsetX={30}
      eyeOffsetY={30}
      eyeRadius={10 + Math.random() *5}
      mouthWidth={10}
      mouthRadius={40}
    />    
  )
);

export default Home;