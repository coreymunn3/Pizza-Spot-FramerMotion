import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Header = () => {
  const motionStages = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Navbar.Brand href='/' className='brand-primary'>
        <div className='logo'>
          <svg
            className='pizza-svg'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <path
              fill='none'
              d='M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z'
            />
            <path fill='none' d='M50 30 L50 -10 C50 -10 90 -10 90 30 Z' />
          </svg>
        </div>
        <motion.h2
          initial='hidden'
          animate='visible'
          variants={motionStages}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Pizza Spot
        </motion.h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link
            as={motion.div}
            initial='hidden'
            animate='visible'
            variants={motionStages}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            Menu
          </Nav.Link>
          <Nav.Link
            as={motion.div}
            initial='hidden'
            animate='visible'
            variants={motionStages}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
