import React, { Fragment, useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Progress from './Progress';

// const progressVariant = {}

const Confirmation = ({ progress, pizza, setShowModal }) => {
  const orderTime = new Date();
  const orderNum = Math.floor(Math.random() * 100000000);
  const [showProgress, setShowProgress] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
      setShowProgress(false);
    }, 5000);
  }, [setShowModal]);
  return (
    <Fragment>
      <motion.div>
        {showProgress && <Progress progress={progress} />}
      </motion.div>
      <Container>
        <h2>Order Placed!</h2>
        <Table striped hover variant='dark'>
          <thead>
            <tr>
              <th>Order #</th>
              <th>{orderNum}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Placed On</td>
              <td>{orderTime.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Base</td>
              <td>{pizza.base}</td>
            </tr>
            {pizza.toppings.map((topping, idx) => (
              <tr key={idx}>
                <td>{`Topping ${idx + 1}`}</td>
                <td>{topping}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <p style={{ textAlign: 'center' }}>You May Close This Window</p>
    </Fragment>
  );
};

export default Confirmation;
