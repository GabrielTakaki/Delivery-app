import React, { useContext, useEffect } from 'react';
import { func } from 'prop-types';
import Context from '../context/Seller';
import
{ FormAddress, LabelAddress, AddressContainer, InputAddress, SelectForm, ButtonAddress }
  from '../styles/addressDetails';

function AddressDetails({ onClick }) {
  const {
    endpoints,
    seller,
    setSeller,
    getSellers,
    setCheckoutForm,
    checkoutForm } = useContext(Context.Context);

  useEffect(() => {
    const fetchSellers = async () => {
      await getSellers();
    };
    fetchSellers();
  }, [endpoints, setSeller, getSellers]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleChangeNumber = ({ target }) => {
    const { name, value } = target;
    setCheckoutForm({ ...checkoutForm, [name]: parseInt(value, 10) });
  };
  return (
    <AddressContainer>
      <FormAddress action="submit">
        <LabelAddress htmlFor="sellerEmail">
          <span>Vendedor(a): </span>
          <SelectForm
            name="sellerEmail"
            value={ checkoutForm.sellerEmail }
            onClick={ handleChange }
            data-testid="customer_checkout__select-seller"
          >
            {
              seller.map((sell) => (
                <option
                  value={ sell.email }
                  key={ sell.id }
                >
                  { sell.email }
                </option>
              ))
            }
          </SelectForm>
        </LabelAddress>
        <LabelAddress htmlFor="deliveryAddress">
          <span>Endereço: </span>
          <InputAddress
            name="deliveryAddress"
            value={ checkoutForm.deliveryAddress }
            onChange={ handleChange }
            data-testid="customer_checkout__input-address"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
        </LabelAddress>
        <LabelAddress htmlFor="deliveryNumber">
          <span>Número: </span>
          <InputAddress
            name="deliveryNumber"
            type="number"
            value={ checkoutForm.deliveryNumber }
            onChange={ handleChangeNumber }
            data-testid="customer_checkout__input-addressNumber"
            text="Número"
            placeholder="198"
          />
        </LabelAddress>
      </FormAddress>
      <ButtonAddress
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ onClick }
      >
        Finalizar Pedido
      </ButtonAddress>
    </AddressContainer>
  );
}

AddressDetails.propTypes = {
  onClick: func.isRequired,
}.isRequired;

export default AddressDetails;
