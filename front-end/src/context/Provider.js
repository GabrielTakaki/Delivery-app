import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

/* Endpoints do backend  */
const endpoints = {
  user: {
    register: 'http://localhost:3001/user/register',
    login: 'http://localhost:3001/user/login',
    list: 'http://localhost:3001/user/list',
    delete: 'http://localhost:3001/user/delete',
  },
  product: {
    list: 'http://localhost:3001/product/list',
  },
  sale: {
    create: 'http://localhost:3001/sale/create',
    list: 'http://localhost:3001/sale/list',
    getById: 'http://localhost:3001/sale/',
  },
};

/* Provider do Context */
function Provider({ children }) {
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [total, setTotal] = useState(0);
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || '');

  const loginSubmit = (loginForm) => axios.post(endpoints.user.login, loginForm);
  const sellSubmit = (checkoutForm, auth) => axios
    .post(endpoints.sale.create, checkoutForm, auth);
  const fetchApi = (endpoint, body) => axios.post(endpoint, body);

  const getProducts = () => {
    const token = localStorage.getItem('token');
    axios
      .get(endpoints.product.list, { headers: { Authorization: token } })
      .then((res) => setProducts(res.data)).catch((err) => console.log(err));
  };

  return (
    <Context.Provider
      value={ {
        setUser,
        user,
        authToken,
        setAuthToken,
        loginSubmit,
        sellSubmit,
        endpoints,
        products,
        fetchApi,
        getProducts,
        total,
        setTotal,
        shoppingCart,
        setShoppingCart,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
