import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/common/Login';
import Register from './pages/common/Register';
import Checkout from './pages/client/Checkout';
import Orders from './pages/client/Orders';

import { CustomerProvider } from './context/Customer';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route
        exact
        path="/customer/orders"
        element={
          <CustomerProvider>
            <Orders />
          </CustomerProvider>
        }
      />
    </Routes>
  );
}

export default App;
