import React from 'react';
import Pizza from './Pizza';
import {
  showValidateOrderAddress,
  confirmOrder,
  cancelOrder
} from 'App.actions';

export default ({ order, address, addressValidated, validateOrder }) => {
  return (
    <div className="Pizzas ValidateOrder">
      <h2>Votre commande</h2>
      {order.map((_, index) => <Pizza key={index + _._id} {..._} />)}
      <div className="set-address">
        {addressValidated ? (
          <p>
            {address.name} <br /> {address.code} {address.city}
          </p>
        ) : (
          <button className="button" onClick={() => showValidateOrderAddress()}>
            SAISIR ADRESSE DE LIVRAISON
          </button>
        )}
      </div>
      {addressValidated ? (
        <div className="confirm-order">
          <button className="button" onClick={() => confirmOrder()}>
            CONFIRMER MA COMMANDE
          </button>
        </div>
      ) : (
        ''
      )}
      <div className="cancel-order">
        <button className="button" onClick={() => cancelOrder()}>
          ANNULER MA COMMANDE
        </button>
      </div>
    </div>
  );
};
