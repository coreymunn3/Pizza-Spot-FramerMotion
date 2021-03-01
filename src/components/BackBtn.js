import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const BackBtn = ({ path, removeProgress }) => {
  return (
    <div className='backbtn'>
      <Link to={path}>
        <Button onClick={removeProgress ? () => removeProgress() : null}>
          <ArrowLeftCircleFill />
          {' Go Back '}
        </Button>
      </Link>
    </div>
  );
};

export default BackBtn;
