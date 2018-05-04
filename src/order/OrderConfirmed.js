import React from 'react';
import { orderFinished } from 'App.actions';

export default ({ address }) => {
  return (
    <div className="OrderConfirmed">
      <h2>Commande terminée !</h2>
      <p>Vous recevrez vos pizzas au :</p>
      <p>{address.name}</p>
      <p>
        {address.code} {address.city}
      </p>
      <p className="thanks">Merci pour votre confiance et bon appétit.</p>
      <div className="back-home">
        <button className="button" onClick={() => orderFinished()}>
          RETOUR ACCUEIL
        </button>
      </div>
    </div>
  );
};
