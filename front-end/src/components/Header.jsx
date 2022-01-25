import React from 'react';

function Header() {
  const localStorageUser = JSON.parse(localStorage.getItem('userName'));
  return (
    <header>
      <nav>
        <ul>
          <li>PRODUTOS</li>
          <li>MEUS PEDIDOS</li>
        </ul>
        <ul>
          <li>{ localStorageUser }</li>
          <li>Sair</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
