import React from 'react';
import './Root.scss';
import Visualizer from './Visualizer';
import Cursor from './Cursor';
import Portfolio from './Portfolio';

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <Portfolio />
      <Visualizer />
      <Cursor />
    </React.Fragment>
  );
}

export default Root;
