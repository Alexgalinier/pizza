import { API } from 'config';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

let connectedComponent;
let state = {
  pizzas: [],
  pizzasError: '',
  pizzasLoading: false,
  selectedPizza: null,
  selectedSize: 'S',
  selectedQuantity: 1,
  order: [],
  validateOrder: false,
  validateOrderAddress: false,
  address: {
    name: '',
    code: '',
    city: ''
  },
  addressValidated: false,
  orderConfirmed: false,
  user: null,
  loginUser: false,
  login: {
    username: '',
    password: ''
  },
  menu: false
};

if (localStorage.getItem('state')) {
  state = JSON.parse(localStorage.getItem('state'));
}

export const connect = component => {
  connectedComponent = component;
  return component;
};
export const getState = () => state;
export const dispatch = (actionKey, data = {}) => {
  console.log('dispatch', actionKey, data);
  switch (actionKey) {
    case 'LOAD_PIZZAS':
      return loadPizzas();
    case 'SELECT_PIZZA':
      return selectPizza(data);
    case 'SELECT_PIZZA_INC_QTY':
      return incQuantity();
    case 'SELECT_PIZZA_DEC_QTY':
      return decQuantity();
    case 'SELECT_CHANGE_SIZE':
      return changeSize(data);
    case 'ADD_TO_ORDER':
      return addToOrder();
    case 'VALIDATE_ORDER':
      return validateOrder();
    case 'VALIDATE_ORDER_ADDRESS':
      return validateOrderAddress();
    case 'BACK':
      return back();
    case 'CHANGE_ADDRESS':
      return changeAddress(data);
    case 'ADDRESS_VALIDATED':
      return addressValidated();
    case 'CONFIRM_ORDER':
      return confirmOrder();
    case 'CANCEL_ORDER':
      return cancelOrder();
    case 'ORDER_FINISHED':
      return orderFinished();
    case 'LOGIN_USER':
      return loginUser();
    case 'SHOW_MENU':
      return showMenu();
    case 'HIDE_MENU':
      return hideMenu();
    case 'CHANGE_LOGIN':
      return changeLogin(data);
    case 'CREATE_ACCOUNT':
      return createAccount();
    case 'LOGIN':
      return login();
    case 'LOGOUT':
      return logout();
    default:
      console.log('Unknown action key', actionKey);
  }
};
const update = changes => {
  state = { ...state, ...changes };
  connectedComponent.setState(state);
  localStorage.setItem('state', JSON.stringify(state));
};

const loadPizzas = () => {
  update({ loadingPizza: true, pizzasError: '' });

  axios
    .get(`${API}/pizzas`)
    .then(_ =>
      update({
        pizzas: _.data,
        loadingPizza: false,
        pizzasError: ''
      })
    )
    .catch(_ => {
      update({
        pizzasError: `Veuillez nous excusez, il ne semble pas possible d'afficher nos pizzas pour le moment.`,
        loadingPizza: false
      });
    });
};

const selectPizza = id => {
  const pizza = state.pizzas.filter(_ => _._id === id);

  if (pizza) {
    update({
      selectedPizza: pizza[0],
      selectedSize: 'S',
      selectedQuantity: 1
    });
  } else {
    update({ selectedPizza: null });
  }
};

const incQuantity = () =>
  update({
    selectedQuantity:
      state.selectedQuantity + 1 > 10 ? 10 : state.selectedQuantity + 1
  });

const decQuantity = () =>
  update({
    selectedQuantity:
      state.selectedQuantity - 1 < 1 ? 1 : state.selectedQuantity - 1
  });

const changeSize = size => update({ selectedSize: size });

const addToOrder = () => {
  update({
    selectedPizza: null,
    order: [
      ...state.order,
      {
        ...state.selectedPizza,
        quantity: state.selectedQuantity,
        size: state.selectedSize
      }
    ]
  });
};

const validateOrder = () => update({ validateOrder: true });
const validateOrderAddress = () => update({ validateOrderAddress: true });
const back = () => {
  if (state.selectedPizza) return update({ selectedPizza: null });
  if (state.loginUser) return update({ loginUser: null });
  if (state.validateOrderAddress)
    return update({ validateOrderAddress: false });
  if (state.validateOrder) return update({ validateOrder: false });
};
const changeAddress = addressValues =>
  update({ address: { ...state.address, ...addressValues } });
const addressValidated = () =>
  update({ addressValidated: true, validateOrderAddress: false });
const confirmOrder = () => {
  update({
    order: [],
    validateOrder: false,
    validateOrderAddress: false,
    orderConfirmed: true
  });
};

const cancelOrder = () => {
  update({
    order: [],
    validateOrder: false,
    validateOrderAddress: false
  });
};

const orderFinished = () => update({ orderConfirmed: false });
const loginUser = () => update({ loginUser: true, menu: false });
const showMenu = () => update({ menu: true });
const hideMenu = () => update({ menu: false });
const changeLogin = loginValues =>
  update({ login: { ...state.login, ...loginValues } });
const createAccount = () => {
  return axios
    .post(`${API}/users`, state.login)
    .then(() => login())
    .catch(_ => {
      console.error(_);
    });
};
const login = () => {
  return axios
    .post(`${API}/login`, state.login)
    .then(_ =>
      update({
        user: jwtDecode(_.data.token),
        loginUser: false
      })
    )
    .catch(_ => {
      console.error(_);
    });
};
const logout = () => {
  update({ user: null, menu: false });
};
