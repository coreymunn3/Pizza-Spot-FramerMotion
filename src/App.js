import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Base from './components/Base';
import Order from './components/Order';
import Toppings from './components/Toppings';
import Progress from './components/Progress';

const App = () => {
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
    <Router>
      <Header />
      <Progress progress={progress} />
      <Switch>
        <Route path='/base'>
          <Base setBase={setBase} pizza={pizza} addProgress={addProgress} />
        </Route>
        <Route path='/toppings'>
          <Toppings
            addTopping={addTopping}
            pizza={pizza}
            addProgress={addProgress}
            removeProgress={removeProgress}
          />
        </Route>
        <Route path='/order'>
          <Order
            pizza={pizza}
            addProgress={addProgress}
            removeProgress={removeProgress}
          />
        </Route>
        <Route path='/'>
          <Home pizza={pizza} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
