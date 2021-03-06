import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import { putSaleUpdateStatus } from '../services/api';

export const Context = createContext();

const initialRoutes = {
  customer: '/customer/products',
  seller: '/seller/orders',
  administrator: '/admin/manage',
};

/* Provider do Context */
const getAuthTokenFromStore = () => {
  const token = localStorage.getItem('token');

  if (token) return JSON.parse(token);

  return '';
};

const getUserFromStore = () => {
  const user = localStorage.getItem('user');

  if (user) {
    const { email, name, role } = JSON.parse(user);

    return { email, name, role };
  }

  return { name: '', email: '', role: '' };
};

export function Provider({ children }) {
  const navigate = useNavigate();

  const [user, setUserOnContext] = useState(getUserFromStore());

  const setUser = ({ name, email, role, token }) => {
    localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
    setUserOnContext({ name, email, role });
  };

  // Auth Token
  const [authToken, setAuthTokenOnContext] = useState(getAuthTokenFromStore());

  const setAuthTokenOnAll = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    setAuthTokenOnContext(token);
  };

  const exit = () => {
    localStorage.clear();
    setUserOnContext({ name: '', email: '', role: '' });
    setAuthTokenOnContext('');
    navigate('/login');
  };

  const checkAuthentication = () => {
    if (authToken) {
      const { exp } = jwt.decode(authToken);
      const mult = 1000;

      if (!exp || (exp * mult) <= Date.now()) exit();
    } else if (!user.role) exit();
  };

  const updateSaleStatus = async (token, id) => putSaleUpdateStatus(token, id);

  return (
    <Context.Provider
      value={ {
        authToken,
        setAuthTokenOnAll,
        user,
        setUser,
        exit,
        initialRoutes,
        checkAuthentication,
        updateSaleStatus,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default {
  Context,
  Provider,
};
