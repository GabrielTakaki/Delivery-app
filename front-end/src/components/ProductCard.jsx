import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ContainerCard } from '../styles/productCard';
import Context from '../context/Context';

/* Gera card do produto */
function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const { shoppingCart, setShoppingCart } = useContext(Context);

  /* Muda o estado de quantidade pelo proprio input */
  const handleChange = ({ target: { value } }) => {
    setQuantity(Number(value));
  };

  /* Subtrai 1un da quantidade pelo click do botão */
  const handleSubtraction = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  /* Atualiza o carrinho do context sempre que a quantidade muda */
  useEffect(() => {
    if (quantity === 0) {
      const actual = { ...shoppingCart };
      delete actual[id];
      setShoppingCart(actual);
    } else {
      setShoppingCart({
        ...shoppingCart,
        [id]: {
          productId: id,
          productName: name,
          productPrice: price,
          quantity,
          subTotal: (quantity * price).toFixed(2),
        },
      });
    }
  }, [quantity]);

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
          onClick={ handleSubtraction }
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
          onClick={ () => setQuantity(quantity + 1) }
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
