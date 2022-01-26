import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

/* Endpoints do backend  */
const endpoints = {
  login: 'http://localhost:3001/user/login',
};

/* Provider do Context */
function Provider({ children }) {
  const [user, setUser] = useState({});
  console.log(user);

  const loginSubmit = (loginForm) => axios.post(endpoints.login, loginForm);

  return (
    <Context.Provider value={ { setUser, loginSubmit } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
