import React from 'react';
import './Order.css';
import { showValidateOrder } from 'App.actions.js';
import ValidateOrder from './ValidateOrder';
import ValidateOrderAddress from './ValidateOrderAddress';
import OrderConfirmed from './OrderConfirmed';

export default ({
  order,
  address,
  addressValidated,
  validateOrder,
  validateOrderAddress,
  orderConfirmed
}) => {
  if (orderConfirmed) return <OrderConfirmed address={address} />;
  if (order.length === 0) return <div />;
  if (validateOrderAddress) return <ValidateOrderAddress address={address} />;
  if (validateOrder)
    return (
      <ValidateOrder
        order={order}
        address={address}
        addressValidated={addressValidated}
      />
    );

  const pizzaQty = order.reduce((sum, _) => sum + _.quantity, 0);

  return (
    <div className="Order">
      <button onClick={showValidateOrder}>
        COMMANDER MES PIZZAS ({pizzaQty})
      </button>
    </div>
  );
};
