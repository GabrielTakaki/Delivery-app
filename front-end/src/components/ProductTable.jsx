import React, { useContext, useEffect } from 'react';
import { string, number, arrayOf } from 'prop-types';
import { Table, TbodyTable, TrTable, MainTable, TotalTable, TdTable, ThTable }
  from '../styles/table';
import Context from '../context/Context';

function ProductTable({
  dataIdItem,
  cartItem,
  remove,
  displayTotal,
  displayRemove,
}) {
  const { total, shoppingCart, setShoppingCart, setTotal } = useContext(Context);
  const removeFromCart = (item) => {
    const actual = { ...shoppingCart };
    delete actual[item];
    setShoppingCart(actual);
  };
  useEffect(() => {
    const sum = () => {
      const items = Object.values(shoppingCart);
      const soma = items.reduce((acc, { quantity, productPrice }) => (
        acc + (quantity * productPrice)
      ), 0);
      setTotal(soma);
    };
    sum();
  }, [shoppingCart]);
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
            cartItem && Object.entries(cartItem).map((cart, index) => (
              <TrTable key={ cart[1].productId }>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-name-${index}`
                  }
                >
                  { cart[1].productName }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-quantity-${index}`
                  }
                >
                  { cart[1].quantity }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-unit-price-${index}`
                  }
                >
                  { `R$${cart[1].productPrice.replace('.', ',')}` }
                </TdTable>
                <TdTable
                  data-testid={
                    `customer_${dataIdItem}__element-order-table-sub-total-${index}`
                  }
                >
                  { `R$ ${cart[1].subTotal.replace('.', ',')}` }
                </TdTable>
                {
                  displayRemove && (
                    <TdTable
                      onClick={ () => removeFromCart(cart[1].productId) }
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
            { `Total: R$ ${total.toFixed(2).toString().replace('.', ',')}` }
          </TotalTable>
        )
      }
    </MainTable>
  );
}

ProductTable.propTypes = {
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

export default ProductTable;
