import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { Seller } from '../../context';

function Orders() {
  const { sale, getSale } = useContext(Seller.Context);

  useEffect(() => {
    getSale();
  }, [getSale]);

  return (
    <>
      <Header />
      {
        sale.map(({
          id,
          status,
          totalPrice,
          sale_date: saleDate,
          deliveryAddress,
          deliveryNumber,
        }) => (
          <OrderCard
            key={ id }
            entity="seller"
            id={ id }
            status={ status }
            date={ saleDate }
            totalPrice={ Number(totalPrice) }
            address={ `${deliveryAddress}, ${deliveryNumber}` }
          />
        ))
      }
    </>
  );
}

export default Orders;
