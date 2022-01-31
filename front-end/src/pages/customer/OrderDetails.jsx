import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { Customer, Global } from '../../context';
import OrderDetailsCard from '../../components/OrderDetailsCard';
import ProductTable from '../../components/ProductTable';

function OrderDetails() {
  const { authToken } = useContext(Global.Context);
  const { shoppingCart, getSale, sale } = useContext(Customer.Context);

  useEffect(() => {
    const fetchSales = async () => {
      await getSale(authToken);
    };
    fetchSales();
  }, [getSale, authToken]);
  console.log(sale);
  console.log(shoppingCart);
  return (
    <div>
      <Header />
      <h3 style={ { margin: '10px' } }>Detalhes do Pedido</h3>
      <OrderDetailsCard />
      <ProductTable
        shoppingCart={ shoppingCart }
        dataIdItem="order_details"
        remove="Remover"
        displayTotal="true"
      />
    </div>
  );
}

export default OrderDetails;
