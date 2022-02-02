import axios from 'axios';

import {
  USER_REGISTER,
  USER_LIST,
  USER_LOGIN,
  USER_DELETE,
  USER_SELLER_LIST,
  PRODUCT_LIST,
  SALE_CREATE,
  SALE_LIST,
  SALE_UPDATE_STATUS,
  // SALE_BY_ID,
} from './endpoints';

const fetchWithBody = (method, endpoint, body) => axios[method](endpoint, body);
const fetchWithToken = (method, endpoint, token) => axios[method](
  endpoint,
  { headers: { Authorization: token } },
);

const fetchWithTokenAndBody = (method, endpoint, token, body) => axios[method](
  endpoint,
  body,
  { headers: { Authorization: token } },
);

// Rotas User
export const postUserRegister = (body) => fetchWithBody('post', USER_REGISTER, body);
export const postUserLogin = (body) => fetchWithBody('post', USER_LOGIN, body);

export const getSellerList = (token) => fetchWithToken('get', USER_SELLER_LIST, token);

// Rota Product
export const getProductsList = (token) => fetchWithToken('get', PRODUCT_LIST, token);

// Rota Sale
export const postSaleCreate = (token, body) => fetchWithTokenAndBody(
  'post',
  SALE_CREATE,
  token,
  body,
);
export const getSaleList = (token) => fetchWithToken('get', SALE_LIST, token);
// export const getSaleById = (token, id) => fetchWithToken(
//   'get', SALE_BY_ID(id), token,
// );
export const putSaleUpdateStatus = async (token, id) => axios.put(
  `${SALE_UPDATE_STATUS}${id}`,
  {},
  { headers: { Authorization: token } },
);

// ADMIN
export const getAdminUsersList = (token) => fetchWithToken('get', USER_LIST, token);
export const deleteUser = (token, body) => fetchWithTokenAndBody(
  'delete',
  USER_DELETE,
  token,
  body,
);
export const postAdminUserRegister = (token, body) => fetchWithTokenAndBody(
  'post',
  USER_REGISTER,
  token,
  body,
);
