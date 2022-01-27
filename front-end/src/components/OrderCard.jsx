import React from 'react';
import { string, number, arrayOf } from 'prop-types';
import { Table, TbodyTable, TrTable, MainTable, TotalTable, TdTable, ThTable }
  from '../styles/table';

function OrderCard({
  total,
  dataIdItem,
  cartItem,
  subTotal,
  remove,
  qtd,
  displayTotal,
  displayRemove,
}) {
  if (total === undefined) total = 0;
  return (
    <MainTable>
      <Table>
        <TbodyTable>
          <tr>
            <ThTable>Item</ThTable>
            <ThTable>Descrição</ThTable>
            <ThTable>Quantidade</ThTable>
            <ThTable>Valor Unitário</ThTable>
            <ThTable>Sub-total</ThTable>
            {
              displayRemove && (
                <ThTable>Remover</ThTable>
              )
            }
          </tr>
          {
            cartItem && cartItem.map((cart, index) => (
              <TrTable key={ cart.id }>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-item-number-${index}`
                  }
                >
                  { cart.id }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-name-${index}`
                  }
                >
                  { cart.name }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-quantity-${index}`
                  }
                >
                  { qtd }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-unit-price-${index}`
                  }
                >
                  { cart.price }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-sub-total-${'index'}`
                  }
                >
                  { subTotal }
                </TdTable>
                {
                  displayRemove && (
                    <TdTable
                      data-testid={
                        `customer_${dataIdItem}__element-order-table-remove-${index}`
                      }
                    >
                      { remove }
                    </TdTable>
                  )
                }
              </TrTable>
            ))
          }
        </TbodyTable>
      </Table>
      {
        displayTotal && (
          <TotalTable data-testid={ `customer_${dataIdItem}__element-order-total-price` }>
            { `Total: R$ ${total}` }
          </TotalTable>
        )
      }
    </MainTable>
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
  qtd: number,
  cartItem: arrayOf(string),
}.isRequired;

export default OrderCard;
