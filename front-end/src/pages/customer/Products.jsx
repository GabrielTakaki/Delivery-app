import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { ContainerProducts, ContainerCard, ButtonCart } from '../../styles/product';

import { Global, Customer } from '../../context';

function ProductsClient() {
  const { authToken } = useContext(Global.Context);
  const {
    products,
    getProducts,
    totalOfShoppingCart,
  } = useContext(Customer.Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /* Quando iniciado a aplicação já busca os produtos */
  useEffect(() => {
    getProducts(authToken);
  }, [authToken, getProducts]);

  /* Elemento loading */
  useEffect(() => {
    if (products.length) {
      setLoading(false);
    }
  }, [products]);

  return (
    <ContainerProducts>
      <Header />
      <div>
        <ButtonCart
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ totalOfShoppingCart === 0 }
        >
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { `Ver carrinho: R$${totalOfShoppingCart
              .toFixed(2).toString().replace('.', ',')}` }
          </span>
        </ButtonCart>
        <h1>Produtos</h1>
        <ContainerCard>
          {
            loading ? <span>Nenhum produto</span> : products.map((product, index) => (
              <ProductCard key={ index } product={ product } />
            ))
          }
        </ContainerCard>
      </div>
    </ContainerProducts>
  );
}

export default ProductsClient;
