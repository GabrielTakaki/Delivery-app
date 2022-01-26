import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/common/Login';
import Register from './pages/common/Register';
import Checkout from './pages/client/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
