import React from 'react';
import P5Sketch from '../../P5Sketch';


const AnimatedHeading = ({ heading }) => {
  return (
    <div style={{textAlign: 'center', marginBottom: '100px' }}>
      <P5Sketch text={heading} />
    </div>
  );
};

export default AnimatedHeading;
