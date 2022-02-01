import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SectionHeader,
  ButtonHeader,
  HeaderComponent,
  NavHeader,
  NameHeader } from '../styles/header';

import { Global } from '../context';

function Header() {
  const { user, exit } = useContext(Global.Context);
  const navigate = useNavigate();

  return (
    <HeaderComponent>
      <NavHeader>
        <SectionHeader>
          {user.role === 'customer' && (
            <ButtonHeader
              type="button"
              data-testid="customer_products__element-navbar-link-products"
              onClick={ () => navigate('/customer/products') }

            >
              PRODUTOS
            </ButtonHeader>)}
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate(`/${user.role}/orders`) }
          >
            MEUS PEDIDOS
          </ButtonHeader>
        </SectionHeader>
        <SectionHeader>
          <NameHeader
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { user.name || 'name' }
          </NameHeader>
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => exit() }
          >
            Sair
          </ButtonHeader>
        </SectionHeader>
      </NavHeader>
    </HeaderComponent>
  );
}

export default Header;
