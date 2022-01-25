import React from 'react';
import { string, number } from 'prop-types';

function OrderCard({
  total,
  item,
  description,
  itemPrice,
  itemTotal,
  remove,
  index,
}) {
  return (
    <main>
      <table>
        <tbody>
          <tr>Item</tr>
          <tr>Descrição</tr>
          <tr>Quantidade</tr>
          <tr>Valor Unitário</tr>
          <tr>Sub-total</tr>
          <tr>Remover item</tr>
          <tr>
            <td
              data-testid={ `
                customer_checkout__element-order-table-item-number-${index}
              ` }
            >
              { item }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-name-${index}` }
            >
              { description }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              { qtd }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              { itemPrice }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              { itemTotal }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              { remove }
            </td>
          </tr>
        </tbody>
      </table>
      <h3 data-testid="customer_checkout__element-order-total-price">
        { `Total: R$ ${total}` }
      </h3>
    </main>
  );
}

OrderCard.propTypes = {
  total: number,
  item: string,
  description: string,
  itemPrice: number,
  itemTotal: number,
  remove: string,
  index: string,
}.isRequired;

export default OrderCard;
