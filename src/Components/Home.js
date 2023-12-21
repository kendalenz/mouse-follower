import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>test</h1>
       <svg width="960" height="500">
      <circle 
        cx="480" 
        cy="250" 
        r="245" 
        fill="yellow"
        stroke="black"
        strokeWidth="10"
      >
      </circle>
      <circle
        cx="350"
        cy="180"
        r="50"
      >
      </circle>
      <circle
        cx="600"
        cy="180"
        r="50"
      >
      </circle>
    </svg>
    </div>
  );
};

export default Home;