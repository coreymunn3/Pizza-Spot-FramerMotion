import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Dropdown } from 'react-bootstrap';
import { Cart2, BagCheckFill } from 'react-bootstrap-icons';
import BackBtn from './BackBtn';

const Order = ({ pizza, addProgress, removeProgress }) => {
  return (
    <Fragment>
      <BackBtn path='/toppings' removeProgress={removeProgress} />
      <Container>
        <div className='order-title mb-4'>
          <Cart2 size={36} />
          <h2 style={{ margin: 0 }}>Order Summary</h2>
        </div>

        <h6>
          You Ordered A <span className='text-primary'>{pizza.base}</span> Pizza
          with:
        </h6>
        <Dropdown.Divider color='dark' />
        <div className='topping-container'>
          {pizza.toppings.map((topping) => (
            <div className='topping-list-item' key={topping}>
              <h6>{topping}</h6>
              <BagCheckFill />
            </div>
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
