import React, { createContext, useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const endpoints = {
    seller: {
      listSeller: 'http://localhost:3001/user/seller/list',
      list: 'http://localhost:3001/sale/list',
    },
  };
  const [seller, setSeller] = useState([]);
  const [sale, setSale] = useState([]);

  const getSale = () => {
    const token = localStorage.getItem('token');
    axios
      .get(endpoints.seller.list, { headers: { Authorization: token } })
      .then((res) => setSale(res.data)).catch((err) => console.log(err));
  };

  const getSaleById = async (id) => {
    const token = localStorage.getItem('token');
    axios
      .get(`${endpoints.seller.listId}${id}`, { headers: { Authorization: token } })
      .then((res) => setSale(res.data)).catch((err) => console.log(err));
  };

  return (
    <Context.Provider
      value={ {
        endpoints,
        seller,
        setSeller,
        checkoutForm,
        setCheckoutForm,
        getSale,
        sale,
        setSale,
        getSaleById,
      } }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default {
  Context,
  Provider,
};
