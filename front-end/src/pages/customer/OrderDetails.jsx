import React, { useContext, useEffect } from 'react';
import moment from 'moment-timezone';
import Header from '../../components/Header';
import { Customer, Global } from '../../context';
import OrderDetailsCard from '../../components/OrderDetailsCard';
import ProductTable from '../../components/ProductTable';

function OrderDetails() {
  const { authToken } = useContext(Global.Context);
  const {
    shoppingCart,
    getSale,
    getSaleById,
    saleDetailsId,
    paramId,
    sellersList,
    getSellers } = useContext(Customer.Context);

  useEffect(() => {
    getSellers(authToken);
  }, [getSellers, authToken]);

  useEffect(() => {
    const fetchSales = async () => {
      await getSale(authToken);
    };
    fetchSales();
  }, [getSale, authToken]);

  useEffect(() => {
    const fetchSales = async () => {
      await getSaleById(authToken, paramId);
    };
    fetchSales();
  }, [getSaleById, authToken, paramId]);

  return (
    <div>
      <Header />
      <h3 style={ { margin: '10px' } }>Detalhes do Pedido</h3>
      {
        saleDetailsId.data && (
          <OrderDetailsCard
            orderNumber={ saleDetailsId.data.id }
            seller={ sellersList[0].name }
            date={ moment(saleDetailsId.data.sale_date).format('DD/MM/YYYY') }
            status={ saleDetailsId.data.status }
            markAsDelivered="MARCAR COMO ENTREGUE"
          />
        )
      }
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
