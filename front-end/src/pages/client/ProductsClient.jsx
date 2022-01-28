import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import ContainerProducts from '../../styles/mainProducts';

function ProductsClient() {
  const {
    products,
    getProducts,
    total,
    setTotal,
    shoppingCart,
  } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /* Quando iniciado a aplicação já busca os produtos */
  useEffect(() => {
    const productsExec = (async () => {
      await getProducts();
    });
    productsExec();
  }, []);

  /* Elemento loading */
  useEffect(() => {
    if (products.length) {
      setLoading(false);
    }
  }, [products]);

  /* Atualiza soma total */
  useEffect(() => {
    const sum = () => {
      const items = Object.values(shoppingCart);
      const soma = items.reduce((acc, { quantity, productPrice }) => (
        acc + (quantity * productPrice)
      ), 0);
      setTotal(soma);
    };
    sum();
  }, [shoppingCart]);

  return (
    <ContainerProducts>
      <Header />
      <div>
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ total === '0,00' }
        >
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { `Ver carrinho: R$${total.toFixed(2).toString().replace('.', ',')}` }
          </span>
        </button>
        <h1>Produtos</h1>
        {
          loading ? <span>Nenhum produto</span> : products.map((product, index) => (
            <ProductCard key={ index } product={ product } />
          ))
        }
      </div>
    </ContainerProducts>
  );
}

export default ProductsClient;
