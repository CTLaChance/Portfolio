import React from 'react';
import moment from 'moment';
import './Root.scss'
import Visualizer from './Visualizer';

const Root: React.FC = () => {
  const calculateYearsOld = () => {
    return moment().diff(moment("1994-12-06"), 'years');
  };

  return (
    <React.Fragment>
      <Visualizer />
      <h1 id="title">CHRISTOPHER LACHANCE</h1>
    </React.Fragment>
  );
}

export default Root;
