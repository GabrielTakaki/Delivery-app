import React, { createContext, useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';
import { io } from 'socket.io-client';

import {
  putSaleUpdateStatus,
} from '../services/api';

export const Context = createContext();

function Provider({ children }) {
  const endpoints = {
    seller: {
      listSeller: 'http://localhost:3001/user/seller/list',
      list: 'http://localhost:3001/sale/list',
      listId: 'http://localhost:3001/sale/',
      update: 'http://localhost:3001/sale/update/1',
    },
  };
  const [seller, setSeller] = useState([]);
  const [saleDetailsId, setSale] = useState();
  const [salesList, setSalesList] = useState([]);

  const [getSale] = useState(() => () => {
    const token = JSON.parse(localStorage.getItem('token'));
    axios
      .get(endpoints.seller.list, { headers: { Authorization: token } })
      .then((res) => setSalesList(res.data)).catch((err) => console.log(err));
  });

  const [getSaleById] = useState(() => async (token, id) => axios
    .get(`${endpoints.seller.listId}${id}`, { headers: { Authorization: token } })
    .then((res) => setSale(res.data)).catch((err) => console.log(err)));

  const updateSaleStatus = async (token, id) => {
    await putSaleUpdateStatus(token, id);
  };

  const [socket] = useState(() => io('http://localhost:3001'));

  useState(() => socket
    .on('statusUpdate', async (payload) => {
      const token = JSON.parse(localStorage.getItem('token'));
      await getSale(token);
      await getSaleById(token, payload.saleId);
    }));

  return (
    <Context.Provider
      value={ {
        endpoints,
        seller,
        setSeller,
        getSale,
        saleDetailsId,
        setSale,
        getSaleById,
        salesList,
        updateSaleStatus,
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
