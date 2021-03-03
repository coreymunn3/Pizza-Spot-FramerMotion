import React, { Fragment } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Check2, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import Progress from './Progress';
import BackBtn from './BackBtn';

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
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
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
  hover: {
    scale: 1.1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.3,
    },
  },
};
const Base = ({ setBase, pizza, progress, addProgress }) => {
  const bases = ['Classic', 'Thin Crust', 'Extra Crispy', 'Brooklyn Style'];
  return (
    <Fragment>
      <Progress progress={progress} />
      <BackBtn path='/home' />
      <Container
        as={motion.div}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <h2 style={{ marginBottom: '2rem' }}>Step 1: Choose Your Base</h2>
        <ListGroup variant='flush' as='ul' className='mb-4'>
          {bases.map((base) => (
            <ListGroup.Item
              as={motion.li}
              whileHover={{ scale: 1.1, originX: 0, color: '#fff' }}
              key={base}
              active={base === pizza.base ? true : false}
              onClick={() => setBase(base)}
            >
              {base} {base === pizza.base && <Check2 />}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {pizza.base && (
          <motion.div
            initial='hidden'
            animate='visible'
            whileHover='hover'
            variants={buttonVariants}
          >
            <Link to='/toppings'>
              <Button
                variant='primary'
                size='lg'
                block
                onClick={() => addProgress()}
              >
                {'Toppings '}
                <ArrowRightCircleFill />
              </Button>
            </Link>
          </motion.div>
        )}
      </Container>
    </Fragment>
  );
};

export default Base;
