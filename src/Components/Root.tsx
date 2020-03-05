import React from 'react';
import './Root.scss';
import Visualizer from './Visualizer';
import Content from './Content';

const Root: React.FC = () => {
  return (
    // Stack items from furthest to closest.
    <React.Fragment>
      <Visualizer />
      <Content />
    </React.Fragment>
  );
}

export default Root;
