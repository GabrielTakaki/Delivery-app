import React from 'react';
import { useNavigate } from 'react-router-dom';
import { number, string } from 'prop-types';
import moment from 'moment';
import {
  OrderCardContainer,
  Status,
} from '../styles/orderCard';

function OrderCard({
  entity,
  id,
  address,
  status,
  date,
  totalPrice,
}) {
  const navigate = useNavigate();

  return (
    <OrderCardContainer onClick={ () => navigate(`/customer/orders/${id}`) }>
      <span>Pedido</span>
      <span data-testid={ `${entity}_orders__element-order-id-${id}` }>{ id }</span>
      <Status
        data-testid={ `${entity}_orders__element-delivery-status-${id}` }
        status={ status }
      >
        { status }
      </Status>
      <span
        data-testid={ `${entity}_orders__element-order-date-${id}` }
      >
        { moment(date).format('D/MM/YYYY') }
      </span>
      <span
        data-testid={ `${entity}_orders__element-card-price-${id}` }
      >
        { `R$ ${totalPrice.toFixed(2).replace('.', ',')}` }
      </span>
      { address && (
        <span
          data-testid={ `${entity}_orders__element-card-address-${id}` }
        >
          { address }
        </span>
      ) }
    </OrderCardContainer>
  );
}

OrderCard.propTypes = {
  entity: string.isRequired,
  id: number.isRequired,
  status: string.isRequired,
  date: string.isRequired,
  totalPrice: number.isRequired,
  address: string,
};

OrderCard.defaultProps = {
  address: '',
};

export default OrderCard;
