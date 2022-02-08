import './App.css';
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/common/Login';
import Register from './pages/common/Register';
import NotFound from './pages/common/NotFound';
import ManageUsers from './pages/admin/ManageUsers';

import customerPages from './pages/customer';
import sellerPages from './pages/seller';

import { Global, Customer, Seller, Admin } from './context';

const adminRoutes = (checker) => {
  if (checker) checker();
  return (
    <Route
      exact
      path="/admin/manage"
      element={
        <Admin.Provider>
          <ManageUsers />
        </Admin.Provider>
      }
    />
  );
};

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
        path="/admin/manage"
        element={
          <Admin.Provider>
            <ManageUsers />
          </Admin.Provider>
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

const sellerRoutes = (checker) => {
  if (checker) checker();
  return (
    <>
      <Route
        path="/seller/orders"
        element={
          <Seller.Provider>
            <sellerPages.Orders />
          </Seller.Provider>
        }
      />
      <Route
        path="/seller/orders/:id"
        element={
          <Seller.Provider>
            <sellerPages.OrderDetails />
          </Seller.Provider>
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
      { user.role && user.role === 'seller' && sellerRoutes(checkAuthentication) }
      { user.role && user.role === 'administrator' && adminRoutes(checkAuthentication) }
      {
        user.role ? <Route path="*" element={ <NotFound /> } />
          : <Route path="*" element={ <Navigate replace to="/login" /> } />
      }
    </Routes>
  );
}

export default App;
