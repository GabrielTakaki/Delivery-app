import React, { createContext, useState, useEffect } from 'react';
import { node } from 'prop-types';

import {
  getProductsList,
  postSaleCreate,
  getSellerList,
  getSaleList,
} from '../services/api';

export const Context = createContext();

export function Provider({ children }) {
  const [checkoutForm, setCheckoutForm] = useState(
    { sellerEmail: '', deliveryAddress: '', deliveryNumber: 0 },
  );

  // Products List
  const [products, setProducts] = useState([]);

  const [getProducts] = useState(() => async (authToken) => {
    const { data } = await getProductsList(authToken);

    setProducts(data);
  });

  // Functions for manipulating the shopping cart
  const [shoppingCart, setShoppingCartInContext] = useState([]);

  const setDirectQuantityOfCartItem = (item, quantity) => {
    const itemIndex = shoppingCart
      .findIndex(({ id }) => id === item.id);

    if (itemIndex >= 0) {
      const newShoppingCart = [...shoppingCart];

      if (quantity >= 0) {
        newShoppingCart.splice(itemIndex, 1);
        setShoppingCartInContext(newShoppingCart);
      } else {
        newShoppingCart[itemIndex].quantity = quantity;
        const { price, quantity: actualQuantity } = newShoppingCart[itemIndex];
        newShoppingCart[itemIndex].subTotal = actualQuantity * price;
        setShoppingCartInContext(newShoppingCart);
      }
    } else if (quantity !== 0) {
      setShoppingCartInContext(
        [...shoppingCart, { ...item, quantity, subTotal: item.price * quantity }],
      );
    }
  };

  const increaseItemQuantityInShoppingCart = (item) => {
    const itemIndex = shoppingCart
      .findIndex(({ id }) => id === item.id);

    if (itemIndex >= 0) {
      const newShoppingCart = [...shoppingCart];
      newShoppingCart[itemIndex].quantity += 1;
      const { price, quantity: actualQuantity } = newShoppingCart[itemIndex];
      newShoppingCart[itemIndex].subTotal = actualQuantity * price;
      setShoppingCartInContext(newShoppingCart);
    } else {
      setShoppingCartInContext(
        [...shoppingCart, { ...item, quantity: 1, subTotal: parseFloat(item.price) }],
      );
    }
  };

  const decreaseItemQuantityInShoppingCart = (item) => {
    const itemIndex = shoppingCart
      .findIndex(({ id }) => id === item.id);

    if (itemIndex >= 0) {
      const newShoppingCart = [...shoppingCart];
      newShoppingCart[itemIndex].quantity -= 1;

      if (newShoppingCart[itemIndex].quantity === 0) {
        newShoppingCart.splice(itemIndex, 1);
        setShoppingCartInContext(newShoppingCart);
      } else {
        const { price, quantity: actualQuantity } = newShoppingCart[itemIndex];
        newShoppingCart[itemIndex].subTotal = actualQuantity * price;
        setShoppingCartInContext(newShoppingCart);
      }
    }
  };

  // Total value of shopping cart
  const [totalOfShoppingCart, setTotalOfShoppingCartInContext] = useState(0);

  const [setTotal] = useState(() => (cart) => {
    const sum = cart.reduce((acc, { quantity, price }) => acc + (quantity * price), 0);

    setTotalOfShoppingCartInContext(sum);
  });

  useEffect(() => {
    setTotal(shoppingCart);
  }, [shoppingCart, setTotal]);

  // Sellers List
  const [sellersList, setSellersList] = useState([]);

  const [getSellers] = useState(() => async (token) => {
    const { data } = await getSellerList(token);

    setSellersList(data.users);
    setCheckoutForm({ ...checkoutForm, sellerEmail: data.users[0].email || '' });
  });

  // Customer orders
  const [orders, setOrders] = useState([]);

  const [postOrder] = useState(() => (
    token,
    saleDate,
  ) => postSaleCreate(token, saleDate));

  const [getOrders] = useState(() => async (token) => {
    const { data } = await getSaleList(token);

    setOrders(data);
  });

  return (
    <Context.Provider
      value={ {
        orders,
        getOrders,
        checkoutForm,
        setCheckoutForm,
        products,
        setProducts,
        getProducts,
        shoppingCart,
        totalOfShoppingCart,
        setTotal,
        postOrder,
        sellersList,
        getSellers,
        setDirectQuantityOfCartItem,
        increaseItemQuantityInShoppingCart,
        decreaseItemQuantityInShoppingCart,
      } }
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default {
  Context,
  Provider,
};
