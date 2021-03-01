import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ y: 40, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className='home'
    >
      <h2 style={{ marginBottom: '2rem' }}>The Pizza Joint - Welcome!</h2>

      <Link to='/base'>
        <Button as={motion.div} animate={{ scale: 1.5 }} variant='primary'>
          {'Create Your Pie '}
          <ArrowRightCircleFill />
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
