import React, { useContext, useEffect } from 'react';
import { string, func } from 'prop-types';
import Context from '../context/Customer';
import
{ FormAddress, LabelAddress, AddressContainer, InputAddress, SelectForm, ButtonAddress }
  from '../styles/addressDetails';

function AddressDetails({ addressValue, onChangeAddress, numberValue, onChangeNumber }) {
  const { endpoints, orders, setOrders, getOrders } = useContext(Context.Context);
  useEffect(() => {
    getOrders();
  }, [endpoints, setOrders, getOrders]);

  console.log(orders);
  return (
    <AddressContainer>
      <FormAddress action="submit">
        <LabelAddress htmlFor="select">
          <span>Vendedor(a): </span>
          <SelectForm
            name="seller"
            data-testid="customer_checkout__select-seller"
          >
            <option>Selecione o vendedor</option>
            <option>Fulana Pereira</option>
          </SelectForm>
        </LabelAddress>
        <LabelAddress htmlFor="address">
          <span>Endereço: </span>
          <InputAddress
            value={ addressValue }
            name="deliveryAddress"
            onChange={ onChangeAddress }
            data-testid="customer_checkout__input-address"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
        </LabelAddress>
        <LabelAddress htmlFor="number">
          <span>Número: </span>
          <InputAddress
            value={ numberValue }
            name="deliveryNumber"
            onChange={ onChangeNumber }
            data-testid="customer_checkout__input-addressNumber"
            text="Número"
            placeholder="198"
          />
        </LabelAddress>
      </FormAddress>
      <ButtonAddress type="button" data-testid="customer_checkout__button-submit-order">
        Finalizar Pedido
      </ButtonAddress>
    </AddressContainer>
  );
}

AddressDetails.propTypes = {
  addressValue: string,
  onChangeAddress: func,
  numberValue: string,
  onChangeNumber: func,
}.isRequired;

export default AddressDetails;
