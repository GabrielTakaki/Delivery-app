import React from 'react';
import { string } from 'prop-types';
import { Section, Span, Button } from '../styles/orderDetailsCard';

function OrderDetailsCard({
  orderNumber, seller, date, status, markAsDelivered, disabled }) {
  return (
    <Section>
      <Span data-testid="customer_order_details__element-order-details-label-order-id">
        { `Pedido ${orderNumber};` }
      </Span>
      <Span data-testid="customer_order_details__element-order-details-label-seller-name">
        { `P. Vend: ${seller}` }
      </Span>
      <Span data-testid="customer_order_details__element-order-details-label-order-date">
        { date }
      </Span>
      <Span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </Span>
      <Button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ disabled }
      >
        { markAsDelivered }
      </Button>
    </Section>
  );
}

OrderDetailsCard.propTypes = {
  orderNumber: string,
  seller: string,
  status: string,
  date: string,
  markAsDelivered: string,
  disabled: string,
}.isRequired;

export default OrderDetailsCard;
