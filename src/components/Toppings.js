import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Check2 } from 'react-bootstrap-icons';
import BackBtn from './BackBtn';

const Toppings = ({ addTopping, pizza, addProgress, removeProgress }) => {
  const toppings = [
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
      <Container>
        <h2 style={{ marginBottom: '2rem' }}>Step 2: Choose your Toppings</h2>
        <ListGroup variant='flush' as='ul' className='mb-4'>
          {toppings.map((topping) => (
            <ListGroup.Item
              as='li'
              key={topping}
              onClick={() => addTopping(topping)}
              active={pizza.toppings.includes(topping) ? true : false}
            >
              {topping} {pizza.toppings.includes(topping) && <Check2 />}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Link to='/order'>
          <Button size='lg' block onClick={() => addProgress()}>
            Review Order
          </Button>
        </Link>
      </Container>
    </Fragment>
  );
};

export default Toppings;
