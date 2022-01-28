import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProductsClient from './pages/client/ProductsClient';
import Login from './pages/common/Login';
import Register from './pages/common/Register';
import Checkout from './pages/client/Checkout';
import Orders from './pages/client/Orders';

import { CustomerProvider } from './context/Customer';
import { SellerProvider } from './context/Seller';
import Details from './pages/client/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <ProductsClient /> } />
      <Route
        exact
        path="/customer/checkout"
        element={
          <SellerProvider>
            <Checkout />
          </SellerProvider>
        }
      />
      <Route
        exact
        path="/customer/orders"
        element={
          <CustomerProvider>
            <Orders />
          </CustomerProvider>
        }
      />
      <Route
        exact
        path="/customer/orders/:id"
        element={ <Details /> }
      />
    </Routes>
  );
}

export default App;
