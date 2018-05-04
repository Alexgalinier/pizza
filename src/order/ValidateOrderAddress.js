import React from 'react';
import { changeAddress, addressValidated } from 'App.actions';

export default ({ address }) => {
  return (
    <div className="ValidateOrderAddress">
      <h2>Votre adresse</h2>
      <div className="form-input">
        <label htmlFor="street">Numéro et voie</label>
        <input
          type="text"
          maxLength="50"
          value={address.name}
          onChange={e => changeAddress({ name: e.target.value })}
        />
      </div>
      <div className="form-input">
        <label htmlFor="street">Code Postal</label>
        <input
          type="text"
          maxLength="5"
          value={address.code}
          onChange={e => changeAddress({ code: e.target.value })}
        />
      </div>
      <div className="form-input">
        <label htmlFor="street">Ville</label>
        <input
          type="text"
          maxLength="30"
          value={address.city}
          onChange={e => changeAddress({ city: e.target.value })}
        />
      </div>
      <div className="set-address">
        <button className="button" onClick={() => addressValidated()}>
          VALIDER ADRESSE
        </button>
      </div>
    </div>
  );
};
