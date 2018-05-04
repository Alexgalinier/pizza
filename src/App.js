import React, { Component } from 'react';
import * as Store from './App.store';
import './App.css';
import { Header } from 'ui';
import Pizzas from './pizzas/Pizzas';
import Order from './order/Order';
import { loadPizzas, back } from 'App.actions';

export default class App extends Component {
  constructor() {
    super();
    Store.connect(this);
  }

  componentDidMount() {
    loadPizzas();
  }

  render() {
    const state = Store.getState();

    const backClick =
      state.selectedPizza || state.validateOrder ? () => back() : null;

    const menuClick =
      !state.selectedPizza && !state.validateOrder ? () => {} : null;

    return (
      <div className={state.order.length > 0 ? 'has-order' : ''}>
        <Header title="Pizza'122" backClick={backClick} menuClick={menuClick} />
        <Pizzas {...state} />
        <Order {...state} />
      </div>
    );
  }
}
