import React from 'react';
import './Root.scss';
import Visualizer from './Visualizer';
import Cursor from './Cursor';
import Portfolio from './Portfolio';

const Root: React.FC = () => {
  return (
    // Stack items from furthest to closest.
    <React.Fragment>
      <Visualizer />
      <Portfolio />
      {/* <Cursor /> */}
    </React.Fragment>
  );
}

export default Root;
