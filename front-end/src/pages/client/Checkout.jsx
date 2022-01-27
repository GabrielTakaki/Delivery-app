import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import AddressDetails from '../../components/AddressDetails';

function Checkout() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/product/list',
        { headers: { Authorization: token },
        });
      return setApi(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <h3 style={ { marginLeft: '10px' } }>Finalizar Pedido</h3>
      <OrderCard
        cartItem={ api }
        dataIdItem="checkout"
        qtd="1"
        subTotal="R$ 100,00"
        remove="Remover"
        displayRemove="true"
        displayTotal="true"
      />
      <h3 style={ { marginLeft: '10px' } }>Endereço de entrega</h3>
      <AddressDetails />
    </>
  );
}

export default Checkout;
