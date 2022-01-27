import React, { useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';
import Context from './Context';

const endpoints = {
  sale: {
    create: 'http://localhost:3001/sale/create',
    list: 'http://localhost:3001/sale/list',
    getById: 'http://localhost:3001/sale/',
  },
};

function Provider({ children }) {
  const [orders, setOrders] = useState([]);

  const [getOrders] = useState(() => async () => {
    const token = localStorage.getItem('token');
    const result = await axios
      .get(endpoints.sale.list, { headers: { Authorization: token } });
    setOrders(result.data);
  });

  return (
    <Context.Provider value={ { endpoints, orders, setOrders, getOrders } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
