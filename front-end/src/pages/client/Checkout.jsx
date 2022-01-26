import React from 'react';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import AddressDetails from '../../components/AddressDetails';

function Checkout() {
  return (
    <>
      <Header />
      <h3 style={ { marginLeft: '10px' } }>Finalizar Pedido</h3>
      <OrderCard
        dataIdItem={ `customer_checkout__element-order-table-item-number-${'index'}` }
        dataIdDescription={ `customer_checkout__element-order-table-name-${'index'}` }
        dataIdQtd={ `customer_checkout__element-order-table-quantity-${'index'}` }
        dataIdItemPrice={ `customer_checkout__element-order-table-unit-price-${'index'}` }
        dataIdSubTotal={ `customer_checkout__element-order-table-sub-total-${'index'}` }
        dataIdRemove={ `customer_checkout__element-order-table-remove-${'index'}` }
        displayTotal="true"
        displayRemove="true"
        dataIdTotal="customer_checkout__element-order-total-price"
        item="1"
        description="Produto 1"
        qtd="1"
        itemPrice="R$ 100,00"
        itemTotal="R$ 100,00"
        remove="Remover"
      />
      <h3 style={ { marginLeft: '10px' } }>Endereço de entrega</h3>
      <AddressDetails />
    </>
  );
}

export default Checkout;
