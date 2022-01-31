import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { Global, Customer } from '../../context';

function Orders() {
  const { authToken } = useContext(Global.Context);
  const { orders, getOrders } = useContext(Customer.Context);

  useEffect(() => {
    getOrders(authToken);
  }, [getOrders, authToken]);

  return (
    <>
      <Header />
      {
        orders.map(({ id, status, totalPrice, sale_date: saleDate }) => (
          <OrderCard
            key={ id }
            entity="customer"
            id={ id }
            status={ status }
            date={ saleDate }
            totalPrice={ Number(totalPrice) }
          />
        ))
      }
    </>
  );
}

export default Orders;
