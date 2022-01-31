import React, { useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';
import Context from './Context';

const endpoints = {
  seller: {
    listSeller: 'http://localhost:3001/user/seller/list',
    list: 'http://localhost:3001/sale/list',
    listId: 'http://localhost:3001/sale/',
  },
};

function Provider({ children }) {
  const [seller, setSeller] = useState([]);
  const [sale, setSale] = useState([]);

  const [checkoutForm, setCheckoutForm] = useState(
    { sellerEmail: '', deliveryAddress: '', deliveryNumber: 0 },
  );

  const [getSellers] = useState(() => async () => {
    const token = localStorage.getItem('token');
    const result = await axios
      .get(endpoints.seller.listSeller, { headers: { Authorization: token } });
    setCheckoutForm({ ...checkoutForm, sellerEmail: result.data.users[0].email });
    setSeller(result.data.users);
  });

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
        getSellers,
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

export default Provider;
