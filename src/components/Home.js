import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import Loader from './Loader';

// variants for framer motion
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 40,
    transition: {
      delay: 0.5,
      duration: 1,
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
  hover: {
    scale: 1.6,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.3,
    },
  },
  visible: {
    scale: 1.5,
  },
};
const Home = () => {
  return (
    <Container
      as={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='home'
    >
      <h2 style={{ marginBottom: '2rem' }}>The Pizza Spot - Welcome!</h2>

      <Link to='/base'>
        <Button
          as={motion.div}
          variants={buttonVariants}
          whileHover='hover'
          animate='visible'
          variant='primary'
        >
          {'Create Your Pie '}
          <ArrowRightCircleFill />
        </Button>
      </Link>
      <Loader />
    </Container>
  );
};

export default Home;
