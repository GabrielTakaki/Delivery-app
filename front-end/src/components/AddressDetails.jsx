import React from 'react';
import
{ FormAddress, LabelAddress, AddressContainer, InputAddress, SelectForm, ButtonAddress }
  from '../styles/addressDetails';

function AddressDetails() {
  return (
    <AddressContainer>
      <FormAddress action="submit">
        <LabelAddress htmlFor="select">
          <span>Vendedor(a): </span>
          <SelectForm name="seller" data-testid="customer_checkout__select-seller">
            <option>Selecione o vendedor</option>
            <option>Fulana Pereira</option>
          </SelectForm>
        </LabelAddress>
        <LabelAddress htmlFor="address">
          <span>Endereço: </span>
          <InputAddress
            data-testid="customer_checkout__input-address"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
        </LabelAddress>
        <LabelAddress htmlFor="number">
          <span>Numero: </span>
          <InputAddress
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

export default AddressDetails;
