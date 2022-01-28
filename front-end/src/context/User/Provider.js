import React, { useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';
import Context from './Context';

const endpoints = {
  user: {
    listSeller: 'http://localhost:3001/user/seller/list',
    list: 'http://localhost:3001/user/list',
    delete: 'http://localhost:3001/user/delete',
  },
};

function Provider({ children }) {
  const [seller, setSeller] = useState([]);

  const [getSellers] = useState(() => async () => {
    const token = localStorage.getItem('token');
    const result = await axios
      .get(endpoints.user.listSeller, { headers: { Authorization: token } });
    setSeller(result.data);
    console.log(result.data);
  });

  return (
    <Context.Provider value={ { endpoints, seller, setSeller, getSellers } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
