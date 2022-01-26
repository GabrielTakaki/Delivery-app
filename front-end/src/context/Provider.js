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
  console.log(user);

  const loginSubmit = (loginForm) => axios.post(endpoints.user.login, loginForm);
  const fetchApi = (endpoint, body) => axios.post(endpoint, body);

  return (
    <Context.Provider value={ { setUser, loginSubmit, endpoints, fetchApi } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
