import React from 'react';
import { Face } from './Face';

const Home = () => {

  const width = 960;
  const height = 500;

  return (
    <div>
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={10}
        eyeOffsetX={90}
        eyeOffsetY={100}
        eyeRadius={40}
        mouthWidth={20}
        mouthRadius={140}
      />
    </div>
  );
};

export default Home;