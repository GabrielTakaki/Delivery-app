import React, { useContext } from 'react';
// import axios from 'axios';
import Context from '../../context/Context';
import Header from '../../components/Header';
import ProductTable from '../../components/ProductTable';
import AddressDetails from '../../components/AddressDetails';

function Checkout() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  console.log(email);
  const { shoppingCart } = useContext(Context);
  return (
    <>
      <Header />
      <h3 style={ { marginLeft: '10px' } }>Finalizar Pedido</h3>
      <ProductTable
        cartItem={ shoppingCart }
        dataIdItem="checkout"
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
