import React, { useContext, useEffect } from 'react';
import Context from '../../context/Seller/Context';
import RootContext from '../../context/Context';
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';
import ProductTable from '../../components/ProductTable';

function Details() {
  const { getSale, sale } = useContext(Context);
  const { shoppingCart } = useContext(RootContext);

  useEffect(() => {
    const fetchSales = async () => {
      await getSale();
    };
    fetchSales();
  }, []);
  console.log(sale);
  return (
    <div>
      <Header />
      <h3 style={ { margin: '10px' } }>Detalhes do Pedido</h3>
      <OrderDetails />
      <ProductTable
        cartItem={ shoppingCart }
        dataIdItem="order_details"
        remove="Remover"
        displayTotal="true"
      />
    </div>
  );
}

export default Details;
