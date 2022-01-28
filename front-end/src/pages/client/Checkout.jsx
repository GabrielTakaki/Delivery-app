import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import { SellerContext } from '../../context/Seller';
import Header from '../../components/Header';
import ProductTable from '../../components/ProductTable';
import AddressDetails from '../../components/AddressDetails';

function Checkout() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  const { shoppingCart, authToken, total, sellSubmit } = useContext(Context);
  const { checkoutForm } = useContext(SellerContext);
  const { sellerEmail, deliveryAddress, deliveryNumber } = checkoutForm;
  const navigate = useNavigate();

  const arraySeller = Object.entries(shoppingCart).map((item) => item[1]);
  const postSell = async () => {
    try {
      const { data } = await sellSubmit({
        userEmail: email,
        sellerEmail,
        totalPrice: total,
        deliveryAddress,
        deliveryNumber: Number(deliveryNumber),
        products: arraySeller,
      }, {
        headers: { Authorization: authToken },
      });
      navigate(`/customer/orders/${data.newSaleId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await postSell();
  };
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
      <AddressDetails
        onClick={ (e) => handleClick(e) }
      />
    </>
  );
}

export default Checkout;
