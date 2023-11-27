export const BASE_URL =
  process.env.NODE_ENV === 'production' ? 'http://localhost:5002' : '';

export const PRODUCTS_URL = `${BASE_URL}/api/products`;
export const USERS_URL = `${BASE_URL}/api/users`;
export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const PAYPAL_URL = `${BASE_URL}/api/confit/paypal`;
