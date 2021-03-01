import React, { Fragment } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Check2, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import BackBtn from './BackBtn';

const Base = ({ setBase, pizza, addProgress }) => {
  const bases = ['Classic', 'Thin Crust', 'Extra Crispy', 'Brooklyn Style'];
  return (
    <Fragment>
      <BackBtn path='/home' />
      <Container
        as={motion.div}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.25 }}
      >
        <h2 style={{ marginBottom: '2rem' }}>Step 1: Choose Your Base</h2>
        <ListGroup variant='flush' as='ul' className='mb-4'>
          {bases.map((base) => (
            <ListGroup.Item
              as='li'
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
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
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
