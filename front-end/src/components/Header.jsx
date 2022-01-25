import React from 'react';
import {
  SectionHeader,
  ButtonHeader,
  HeaderComponent,
  NavHeader } from '../styles/header';

function Header() {
  const localStorageUser = JSON.parse(localStorage.getItem('userName'));
  return (
    <HeaderComponent>
      <NavHeader>
        <SectionHeader>
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </ButtonHeader>
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </ButtonHeader>
        </SectionHeader>
        <SectionHeader>
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { localStorageUser }
          </ButtonHeader>
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </ButtonHeader>
        </SectionHeader>
      </NavHeader>
    </HeaderComponent>
  );
}

export default Header;
