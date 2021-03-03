import React, { Fragment, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Header from './components/Header';
import Base from './components/Base';
import Order from './components/Order';
import Toppings from './components/Toppings';

const App = () => {
  const location = useLocation();
  const [pizza, setPizza] = useState({
    base: '',
    toppings: [],
  });
  const [progress, setProgress] = useState(0);

  const addProgress = () => {
    setProgress(progress + 33.33);
  };

  const removeProgress = () => {
    setProgress(progress - 33.33);
  };

  const setBase = (chosenBase) => {
    setPizza({
      ...pizza,
      base: chosenBase,
    });
  };
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/base'>
            <Base
              setBase={setBase}
              pizza={pizza}
              progress={progress}
              addProgress={addProgress}
            />
          </Route>
          <Route path='/toppings'>
            <Toppings
              addTopping={addTopping}
              pizza={pizza}
              progress={progress}
              addProgress={addProgress}
              removeProgress={removeProgress}
            />
          </Route>
          <Route path='/order'>
            <Order
              pizza={pizza}
              progress={progress}
              addProgress={addProgress}
              removeProgress={removeProgress}
            />
          </Route>
          <Route path='/'>
            <Home pizza={pizza} />
          </Route>
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
};

export default App;
