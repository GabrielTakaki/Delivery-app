import React, { useContext, useEffect } from 'react';
import moment from 'moment-timezone';
import Header from '../../components/Header';
import { Customer, Global } from '../../context';
import OrderDetailsCard from '../../components/OrderDetailsCard';
import ProductTable from '../../components/ProductTable';

function OrderDetails() {
  const { authToken, updateSaleStatus } = useContext(Global.Context);
  const {
    getSale,
    getSaleById,
    saleDetailsId,
    paramId,
    sellersList,
    getSellers,
  } = useContext(Customer.Context);

  useEffect(() => {
    const fetchSales = async () => {
      await getSaleById(authToken, paramId);
      await getSellers(authToken);
      await getSale(authToken);
    };
    fetchSales();
  }, [getSellers, getSale, getSaleById, authToken, paramId]);

  const handleDeliveryCheck = async () => {
    await updateSaleStatus(authToken, paramId);
    await getSaleById(authToken, paramId);
  };

  const buttons = [

    {
      message: 'MARCAR COMO ENTREGUE',
      dataTestId: 'customer_order_details__button-delivery-check',
      disabledCondition: saleDetailsId && saleDetailsId.status !== 'Em Trânsito',
      handler: handleDeliveryCheck,
    },
  ];

  const subTotal = saleDetailsId.products && saleDetailsId.products
    .map((item) => ({
      ...item,
      subTotal: item.price * item.salesProduct.quantity,
      quantity: item.salesProduct.quantity,
    }));

  return (
    <div>
      <Header />
      <h3 style={ { margin: '10px' } }>Detalhes do Pedido</h3>
      {
        saleDetailsId && sellersList.length > 0 ? (
          <OrderDetailsCard
            userRole="customer"
            orderNumber={ saleDetailsId.id }
            seller={ sellersList[0].name }
            date={ moment(saleDetailsId.sale_date).format('DD/MM/YYYY') }
            status={ saleDetailsId.status }
            buttons={ buttons }
          />
        ) : 'Nada encontrado'
      }
      <ProductTable
        shoppingCart={ subTotal }
        dataIdItem="order_details"
        remove="Remover"
        displayTotal="true"
        detailsTotalPrice={ saleDetailsId.totalPrice }
      />
    </div>
  );
}

export default OrderDetails;
