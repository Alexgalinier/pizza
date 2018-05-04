const target = (prod, dev) =>
  /* process.env.NODE_ENV === 'production' ? prod : dev; */
  true ? prod : dev;

export const API = target(
  'https://pizza-122.herokuapp.com',
  'http://localhost:3000'
);
