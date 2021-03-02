import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

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
};
const buttonVariants = {
  hover: {
    scale: [1.5, 1.6, 1.5, 1.6, 1.5, 1.6, 1.5],
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
    </Container>
  );
};

export default Home;
