import React from 'react';
import { string, number } from 'prop-types';
import { Table, TbodyTable, TrTable, MainTable, TotalTable, TdTable, ThTable }
  from '../styles/table';

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
          <TrTable>
            <TdTable data-testid={ dataIdItem }>
              { item }
            </TdTable>
            <TdTable data-testid={ dataIdDescription }>
              { description }
            </TdTable>
            <TdTable data-testid={ dataIdQtd }>
              { qtd }
            </TdTable>
            <TdTable data-testid={ dataIdItemPrice }>
              { itemPrice }
            </TdTable>
            <TdTable data-testid={ dataIdSubTotal }>
              { itemTotal }
            </TdTable>
            {
              displayRemove && (
                <TdTable
                  data-testid={ dataIdRemove }
                >
                  { remove }
                </TdTable>
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
