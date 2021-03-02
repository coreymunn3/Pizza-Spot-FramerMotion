import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Check2 } from 'react-bootstrap-icons';
import BackBtn from './BackBtn';
import { motion } from 'framer-motion';

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
    },
  },
};
const buttonVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const Toppings = ({ addTopping, pizza, addProgress, removeProgress }) => {
  const toppings = [
    'Cheese - Plain',
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'chicken',
    'pineapples',
    'extra cheese',
  ];
  return (
    <Fragment>
      <BackBtn path='/base' removeProgress={removeProgress} />
      <Container
        as={motion.div}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <h2 style={{ marginBottom: '2rem' }}>Step 2: Choose your Toppings</h2>
        <ListGroup variant='flush' as='ul' className='mb-4'>
          {toppings.map((topping) => (
            <ListGroup.Item
              as={motion.li}
              whileHover={{ scale: 1.1, originX: 0, color: '#fff' }}
              key={topping}
              onClick={() => addTopping(topping)}
              active={pizza.toppings.includes(topping) ? true : false}
            >
              {topping} {pizza.toppings.includes(topping) && <Check2 />}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {pizza.toppings.length > 0 && (
          <motion.div
            initial='hidden'
            animate='visible'
            variants={buttonVariants}
          >
            <Link to='/order'>
              <Button
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                size='lg'
                block
                onClick={() => addProgress()}
              >
                Review Order
              </Button>
            </Link>
          </motion.div>
        )}
      </Container>
    </Fragment>
  );
};

export default Toppings;
