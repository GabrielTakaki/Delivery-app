import React from 'react';
import { string, number } from 'prop-types';
import { Table, TbodyTable, TrTable, MainTable, TotalTable } from '../styles/table';

function OrderCard({
  total,
  item,
  description,
  itemPrice,
  dataIdItem,
  dataIdDescription,
  dataIdItemPrice,
  dataIdSubTotal,
  dataIdQtd,
  dataIdRemove,
  itemTotal,
  remove,
  dataIdTotal,
  qtd,
  displayTotal,
  displayRemove,
}) {
  return (
    <MainTable>
      <Table>
        <TbodyTable>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            {
              displayRemove && (
                <th>Remover</th>
              )
            }
          </tr>
          <TrTable>
            <td data-testid={ dataIdItem }>
              { item }
            </td>
            <td data-testid={ dataIdDescription }>
              { description }
            </td>
            <td data-testid={ dataIdQtd }>
              { qtd }
            </td>
            <td data-testid={ dataIdItemPrice }>
              { itemPrice }
            </td>
            <td data-testid={ dataIdSubTotal }>
              { itemTotal }
            </td>
            {
              displayRemove && (
                <td
                  data-testid={ dataIdRemove }
                >
                  { remove }
                </td>
              )
            }
          </TrTable>
        </TbodyTable>
      </Table>
      {
        displayTotal && (
          <TotalTable data-testid={ dataIdTotal }>
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
}.isRequired;

export default OrderCard;
