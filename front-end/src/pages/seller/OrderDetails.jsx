import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment-timezone';
import Header from '../../components/Header';
import { Seller, Global } from '../../context';
import OrderDetailsCard from '../../components/OrderDetailsCard';
import ProductTable from '../../components/ProductTable';

function OrderDetails() {
  const { authToken, updateSaleStatus } = useContext(Global.Context);
  const {
    saleDetailsId,
    getSaleById,
  } = useContext(Seller.Context);

  const { id } = useParams();

  const [doubleClickInhibitor, setDoubleClickInhibitor] = useState(false);

  useEffect(() => {
    getSaleById(authToken, id);
  }, [getSaleById, authToken, id]);

  const handlePreparingCheck = async () => {
    setDoubleClickInhibitor(true);
    await updateSaleStatus(authToken, id);
  };

  const buttons = [
    {
      message: 'PREPARAR PEDIDO',
      dataTestId: 'seller_order_details__button-preparing-check',
      disabledCondition: doubleClickInhibitor
        || (saleDetailsId && saleDetailsId.status !== 'Pendente'),
      handler: handlePreparingCheck,
    },
    {
      message: 'SAIU PARA ENTREGA',
      dataTestId: 'seller_order_details__button-dispatch-check',
      disabledCondition: saleDetailsId && saleDetailsId.status !== 'Preparando',
      handler: async () => updateSaleStatus(authToken, saleDetailsId.id),
    },
  ];

  const subTotal = saleDetailsId && saleDetailsId.products
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
        saleDetailsId ? (
          <OrderDetailsCard
            userRole="seller"
            orderNumber={ saleDetailsId.id }
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
        detailsTotalPrice={ (saleDetailsId && saleDetailsId.totalPrice) || 0 }
      />
    </div>
  );
}

export default OrderDetails;
