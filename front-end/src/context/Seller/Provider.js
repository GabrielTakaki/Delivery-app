import React, { useState } from 'react';
import axios from 'axios';
import { node } from 'prop-types';
import Context from './Context';

const endpoints = {
  seller: {
    listSeller: 'http://localhost:3001/user/seller/list',
  },
};

function Provider({ children }) {
  const [seller, setSeller] = useState([]);

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

  return (
    <Context.Provider
      value={ {
        endpoints,
        seller,
        setSeller,
        getSellers,
        checkoutForm,
        setCheckoutForm,
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
