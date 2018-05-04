import React from 'react';
import './Pizzas.css';
import Pizza from './Pizza';
import SelectedPizza from './SelectedPizza';
import { selectPizza } from 'App.actions.js';

export default ({
  pizzas,
  pizzasLoading,
  pizzasError,
  selectedPizza,
  validateOrder,
  orderConfirmed,
  ...selectedOptions
}) => {
  let res;

  const curryOnPizzaClick = id => () => selectPizza(id);

  if (selectedPizza)
    return <SelectedPizza {...selectedPizza} {...selectedOptions} />;

  if (pizzasLoading === true) {
    res = <div className="pizza-loading">Loading...</div>;
  } else if (pizzasError !== '') {
    res = <p className="pizza-error">{pizzasError}</p>;
  } else {
    res = pizzas.map(_ => (
      <Pizza key={_._id} {..._} onClick={curryOnPizzaClick(_._id)} />
    ));
  }

  return (
    <div className="Pizzas">
      <h2>Nos pizzas</h2>
      {res}
    </div>
  );
};
