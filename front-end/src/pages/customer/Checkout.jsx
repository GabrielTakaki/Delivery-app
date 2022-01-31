import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import ProductTable from '../../components/ProductTable';
import AddressDetails from '../../components/AddressDetails';

import { Global, Customer } from '../../context';

function Checkout() {
  const { authToken, user } = useContext(Global.Context);
  const {
    checkoutForm,
    shoppingCart,
    totalOfShoppingCart,
    postOrder,
    getSellers,
  } = useContext(Customer.Context);

  const navigate = useNavigate();

  useEffect(() => {
    getSellers(authToken);
  }, [getSellers, authToken]);

  const handleClick = async (e) => {
    e.preventDefault();
    const { email } = user;
    const { sellerEmail, deliveryAddress, deliveryNumber } = checkoutForm;
    try {
      const { data } = await postOrder(
        authToken,
        {
          userEmail: email,
          sellerEmail,
          totalPrice: totalOfShoppingCart,
          deliveryAddress,
          deliveryNumber: Number(deliveryNumber),
          products: shoppingCart.map(({ id, quantity }) => ({ productId: id, quantity })),
        },
      );

      navigate(`/customer/orders/${data.newSaleId}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <h3 style={ { marginLeft: '10px' } }>Finalizar Pedido</h3>
      <ProductTable
        shoppingCart={ shoppingCart }
        dataIdItem="checkout"
        remove="Remover"
        displayRemove="true"
        displayTotal="true"
      />
      <h3 style={ { marginLeft: '10px' } }>Endereço de entrega</h3>
      <AddressDetails
        onClick={ (e) => handleClick(e) }
      />
    </>
  );
}

export default Checkout;
