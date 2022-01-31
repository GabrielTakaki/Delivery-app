import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>NotFound</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFound;
