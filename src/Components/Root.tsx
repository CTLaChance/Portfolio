import React from 'react';
import './Root.scss';
import Visualizer from './Visualizer';
// import Cursor from './Cursor';
// import Portfolio from './Portfolio';

const Root: React.FC = () => {
  return (
    // Stack items from furthest to closest.
    <React.Fragment>
      <Visualizer />
      <div id="content">
        <h1 id="name">CHRISTOPHER LACHANCE</h1>
        <svg id="chevron-down" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </React.Fragment>
  );
}

export default Root;
