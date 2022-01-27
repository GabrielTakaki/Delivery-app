import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Context from '../../context/Context';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import AddressDetails from '../../components/AddressDetails';

function Checkout() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  console.log(email);
  const { authToken } = useContext(Context);
  const [api, setApi] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/product/list',
        { headers: { Authorization: authToken },
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
