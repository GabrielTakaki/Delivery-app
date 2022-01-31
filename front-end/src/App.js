import './App.css';
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/common/Login';
import Register from './pages/common/Register';
import NotFound from './pages/common/NotFound';

import customerPages from './pages/customer';

import { Global, Customer } from './context';

const customerRoutes = (checker) => {
  if (checker) checker();
  return (
    <>
      <Route
        path="/customer/products"
        element={
          <Customer.Provider>
            <customerPages.Products />
          </Customer.Provider>
        }
      />
      <Route
        exact
        path="/customer/checkout"
        element={
          <Customer.Provider>
            <customerPages.Checkout />
          </Customer.Provider>
        }
      />
      <Route
        exact
        path="/customer/orders"
        element={
          <Customer.Provider>
            <customerPages.Orders />
          </Customer.Provider>
        }
      />
      <Route
        exact
        path="/customer/orders/:id"
        element={
          <Customer.Provider>
            <customerPages.OrderDetails />
          </Customer.Provider>
        }
      />
    </>
  );
};

function App() {
  const { user, checkAuthentication } = useContext(Global.Context);
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route
        exact
        path="/login"
        element={ <Login /> }
      />
      <Route
        exact
        path="/register"
        element={ <Register /> }
      />
      { user.role && user.role === 'customer' && customerRoutes(checkAuthentication) }
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
