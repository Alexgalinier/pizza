import { dispatch } from './App.store';

export const loadPizzas = () => dispatch('LOAD_PIZZAS');
export const selectPizza = id => dispatch('SELECT_PIZZA', id);
export const incQuantity = () => dispatch('SELECT_PIZZA_INC_QTY');
export const decQuantity = () => dispatch('SELECT_PIZZA_DEC_QTY');
export const changeSize = size => dispatch('SELECT_CHANGE_SIZE', size);
export const addToOrder = () => dispatch('ADD_TO_ORDER');
export const showValidateOrder = () => dispatch('VALIDATE_ORDER');
export const showValidateOrderAddress = () =>
  dispatch('VALIDATE_ORDER_ADDRESS');
export const back = () => dispatch('BACK');
export const changeAddress = address => dispatch('CHANGE_ADDRESS', address);
export const addressValidated = () => dispatch('ADDRESS_VALIDATED');
export const confirmOrder = () => dispatch('CONFIRM_ORDER');
export const cancelOrder = () => dispatch('CANCEL_ORDER');
export const orderFinished = () => dispatch('ORDER_FINISHED');
export const loginUser = () => dispatch('LOGIN_USER');
export const showMenu = () => dispatch('SHOW_MENU');
export const hideMenu = () => dispatch('HIDE_MENU');
export const changeLogin = login => dispatch('CHANGE_LOGIN', login);
export const createAccount = () => dispatch('CREATE_ACCOUNT');
export const login = () => dispatch('LOGIN');
export const logout = () => dispatch('LOGOUT');
