import React, { useEffect, useContext } from 'react';
// import axios from 'axios';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { CustomerContext } from '../../context/Customer';

function Orders() {
  const { endpoints, orders, setOrders, getOrders } = useContext(CustomerContext);

  useEffect(() => {
    getOrders();
  }, [endpoints, setOrders, getOrders]);

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
