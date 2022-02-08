import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SectionHeader,
  ButtonHeader,
  HeaderComponent,
  NavHeader,
  NameHeader } from '../styles/header';

import { Global } from '../context';

const showProducts = (hasProducts) => {
  if (hasProducts === true) {
    return (
      <ButtonHeader
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => navigate('/customer/products') }
      >
        PRODUTOS
      </ButtonHeader>
    );
  }
};

function Header({ hasProducts, title }) {
  const { user, exit } = useContext(Global.Context);
  const navigate = useNavigate();
  return (
    <HeaderComponent>
      <NavHeader>
        <SectionHeader>
          { showProducts(hasProducts) }
          <ButtonHeader
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate(`/${user.role}/orders`) }
            disabled={ title === 'GERENCIAR USUÁRIOS' }
          >
            { title }
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

Header.defaultProps = {
  hasProducts: true,
  title: 'MEUS PRODUTOS',
};

Header.propTypes = {
  hasProducts: PropTypes.bool,
  title: PropTypes.string,
};

export default Header;
