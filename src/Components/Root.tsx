import React from 'react';
import './Root.scss';
import Visualizer from './Visualizer';

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <Visualizer />
      <h1 id="title">CHRISTOPHER LACHANCE</h1>
    </React.Fragment>
  );
}

export default Root;
