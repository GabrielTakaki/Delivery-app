import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ContainerCard } from '../styles/productCard';
import { Customer } from '../context';

/* Gera card do produto */
function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const {
    shoppingCart,
    setDirectQuantityOfCartItem,
    increaseItemQuantityInShoppingCart,
    decreaseItemQuantityInShoppingCart,
  } = useContext(Customer.Context);

  const [quantity, setQuantity] = useState(0);
  /* Muda o estado de quantidade pelo proprio input */
  const handleChange = ({ target: { value } }) => {
    setDirectQuantityOfCartItem(product, Number(value));
  };

  useEffect(() => {
    const productIndexInCart = shoppingCart.findIndex((item) => item.id === product.id);

    if (productIndexInCart >= 0) {
      setQuantity(shoppingCart[productIndexInCart].quantity);
    } else {
      setQuantity(0);
    }
  }, [product, setQuantity, shoppingCart]);

  return (
    <ContainerCard>
      <section data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </section>
      <section>
        <img
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          width={ 50 }
        />
      </section>
      <section>
        <h1 data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </h1>
      </section>
      <section>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => decreaseItemQuantityInShoppingCart(product) }
        >
          -
        </button>
        <input
          type="number"
          name={ `product-${id}` }
          min={ 0 }
          placeholder="0"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => increaseItemQuantityInShoppingCart(product) }
        >
          +
        </button>
      </section>
    </ContainerCard>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
