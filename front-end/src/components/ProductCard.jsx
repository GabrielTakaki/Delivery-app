import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImage, CardName, CardInput, CardButton, CardPrice }
  from '../styles/product';
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
    <Card>
      <CardPrice data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </CardPrice>
      <section>
        <CardImage
          src={ urlImage }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          width={ 70 }
        />
      </section>
      <section>
        <CardName data-testid={ `customer_products__element-card-title-${id}` }>
          { name }
        </CardName>
      </section>
      <section>
        <CardButton
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => decreaseItemQuantityInShoppingCart(product) }
        >
          -
        </CardButton>
        <CardInput
          type="number"
          name={ `product-${id}` }
          min={ 0 }
          placeholder="0"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ handleChange }
        />
        <CardButton
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => increaseItemQuantityInShoppingCart(product) }
        >
          +
        </CardButton>
      </section>
    </Card>
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
