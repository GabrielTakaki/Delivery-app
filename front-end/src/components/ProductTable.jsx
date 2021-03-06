import React, { useContext } from 'react';
import { string, number, arrayOf } from 'prop-types';
import { Table, TbodyTable, TrTable, MainTable, TotalTable, TdTable, ThTable }
  from '../styles/table';
import { Global, Seller, Customer } from '../context';

function ProductTable({
  dataIdItem,
  shoppingCart,
  remove,
  displayTotal,
  displayRemove,
}) {
  const { user } = useContext(Global.Context);
  const {
    setDirectQuantityOfCartItem,
    totalOfShoppingCart,
    saleDetailsId,
  } = useContext(user.role === 'customer' ? Customer.Context : Seller.Context);
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
            shoppingCart && shoppingCart.map((product, index) => (
              <TrTable key={ product.id }>
                <TdTable
                  data-testid={
                    `${user.role}_${dataIdItem}__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </TdTable>
                <TdTable
                  data-testid={
                    `${user.role}_${dataIdItem}__element-order-table-name-${index}`
                  }
                >
                  { product.name }
                </TdTable>
                <TdTable
                  data-testid={
                    `${user.role}_${dataIdItem}__element-order-table-quantity-${index}`
                  }
                >
                  { product.quantity }
                </TdTable>
                <TdTable
                  data-testid={
                    `${user.role}_${dataIdItem}__element-order-table-unit-price-${index}`
                  }
                >
                  { `R$${product.price.replace('.', ',')}` }
                </TdTable>
                <TdTable
                  data-testid={
                    `${user.role}_${dataIdItem}__element-order-table-sub-total-${index}`
                  }
                >
                  { `R$ ${product.subTotal.toFixed(2).replace('.', ',')}` }
                </TdTable>
                {
                  displayRemove && (
                    <TdTable
                      onClick={ () => setDirectQuantityOfCartItem(product, 0) }
                      data-testid={
                        `${user.role}_${dataIdItem}__element-order-table-remove-${index}`
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
        displayTotal && totalOfShoppingCart > 0 ? (
          <TotalTable
            data-testid={ `${user.role}_${dataIdItem}__element-order-total-price` }
          >
            { `Total: R$ ${totalOfShoppingCart.toFixed(2).toString().replace('.', ',')}` }
          </TotalTable>
        ) : saleDetailsId && (
          <TotalTable
            data-testid={ `${user.role}_${dataIdItem}__element-order-total-price` }
          >
            {
              `Total: R$
              ${saleDetailsId.totalPrice && saleDetailsId.totalPrice.replace('.', ',')}`
            }
          </TotalTable>
        )
      }
    </MainTable>
  );
}

ProductTable.propTypes = {
  item: string,
  description: string,
  itemPrice: number,
  itemTotal: number,
  remove: string,
  index: string,
  qtd: number,
  shoppingCart: arrayOf(string),
}.isRequired;

export default ProductTable;
