import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Dropdown } from 'react-bootstrap';
import { Cart2, BagCheckFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import BackBtn from './BackBtn';
import Progress from './Progress';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: '0.4',
      damping: '10',
      when: 'beforeChildren',
      staggerChildren: '0.3',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Order = ({ pizza, addProgress, progress, removeProgress }) => {
  return (
    <Fragment>
      <Progress progress={progress} />
      <BackBtn path='/toppings' removeProgress={removeProgress} />
      <Container
        as={motion.div}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className='order-title mb-4'>
          <Cart2 size={36} />

          <h2 style={{ margin: 0 }}>Thank You For Your Order!</h2>
        </div>

        <h6>
          You Ordered A <span className='text-primary'>{pizza.base}</span> Pizza
          with:
        </h6>
        <Dropdown.Divider color='dark' />
        <div className='topping-container'>
          {pizza.toppings.map((topping) => (
            <motion.div
              variants={listVariants}
              className='topping-list-item'
              key={topping}
            >
              <h6>{topping}</h6>
              <BagCheckFill />
            </motion.div>
          ))}
        </div>
        <Link to='/home'>
          <Button size='lg' block onClick={() => addProgress()}>
            Place Your Order
          </Button>
        </Link>
      </Container>
    </Fragment>
  );
};

export default Order;
