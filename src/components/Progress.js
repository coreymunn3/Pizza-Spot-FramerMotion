import React, { Fragment } from 'react';
import { ProgressBar } from 'react-bootstrap';

const Progress = ({ progress }) => {
  return (
    <Fragment>
      <div className='progress-container'>
        <ProgressBar animated now={progress} />
      </div>
    </Fragment>
  );
};

export default Progress;
