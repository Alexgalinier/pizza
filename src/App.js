import React, { Component } from 'react';
import * as Store from './App.store';
import './App.css';
import { Header, NavigationDrawer } from 'ui';
import Pizzas from './pizzas/Pizzas';
import Order from './order/Order';
import Login from './login/Login';
import {
  loadPizzas,
  back,
  showMenu,
  hideMenu,
  loginUser,
  logout
} from 'App.actions';

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
    const { order, menu, user } = state;

    const backClick =
      state.selectedPizza || state.validateOrder || state.loginUser
        ? () => back()
        : null;

    const menuClick =
      !state.validateOrder && !state.orderConfirmed && !state.loginUser
        ? () => showMenu()
        : null;

    return (
      <div className={order.length > 0 ? 'has-order' : ''}>
        {menu ? (
          <NavigationDrawer close={hideMenu}>
            {user ? (
              <div className="user">
                <div>{user.username}</div>
                <button className="button" onClick={() => logout()}>
                  SE DECONNECTER
                </button>
              </div>
            ) : (
              <div className="menu-login">
                <button className="button" onClick={() => loginUser()}>
                  SE CONNECTER
                </button>
              </div>
            )}
          </NavigationDrawer>
        ) : (
          ''
        )}
        <Header title="Pizza'122" backClick={backClick} menuClick={menuClick} />
        {!state.validateOrder && !state.orderConfirmed && !state.loginUser ? (
          <Pizzas {...state} />
        ) : (
          ''
        )}
        {state.validateOrder || state.orderConfirmed || order.length > 0 ? (
          <Order {...state} />
        ) : (
          ''
        )}
        {state.loginUser ? <Login {...state} /> : ''}
      </div>
    );
  }
}
