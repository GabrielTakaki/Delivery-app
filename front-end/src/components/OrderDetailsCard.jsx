import React from 'react';
import { string, arrayOf, object } from 'prop-types';
import { Section, Span, Button } from '../styles/orderDetailsCard';
import StatusBar from '../styles/statusBar';

function OrderDetailsCard({
  userRole, orderNumber, seller, date, status, buttons }) {
  return (
    <Section>
      <Span
        data-testid={
          `${userRole}_order_details__element-order-details-label-order-id`
        }
      >
        { `Pedido ${orderNumber};` }
      </Span>
      { userRole === 'customer' && (
        <Span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { `P. Vend: ${seller}` }
        </Span>)}
      <Span
        data-testid={
          `${userRole}_order_details__element-order-details-label-order-date`
        }
      >
        { date }
      </Span>
      <StatusBar
        data-testid={
          `${userRole}_order_details__element-order-details-label-delivery-status`
        }
        status={ status }
        width="10%"
      >
        { status }
      </StatusBar>
      { buttons.map(({ message, dataTestId, disabledCondition, handler }, index) => (
        <Button
          type="button"
          data-testid={ dataTestId }
          disabled={ disabledCondition }
          onClick={ handler }
          key={ index }
        >
          { message }
        </Button>
      )) }
    </Section>
  );
}

OrderDetailsCard.propTypes = {
  userRole: string,
  orderNumber: string,
  seller: string,
  status: string,
  date: string,
  buttons: arrayOf(object),
}.isRequired;

export default OrderDetailsCard;
