import React from 'react';
import { changeLogin, login as loginAction, createAccount } from 'App.actions';
import './Login.css';

export default ({ login }) => {
  return (
    <div>
      <div className="form-input">
        <label htmlFor="street">Identifiant</label>
        <input
          type="text"
          maxLength="20"
          value={login.username}
          onChange={e => changeLogin({ username: e.target.value })}
        />
      </div>
      <div className="form-input">
        <label htmlFor="street">Mot de passe</label>
        <input
          type="password"
          maxLength="20"
          value={login.password}
          onChange={e => changeLogin({ password: e.target.value })}
        />
      </div>
      <div className="login-create">
        <button className="button" onClick={() => loginAction()}>
          SE CONNECTER
        </button>
        <button className="button" onClick={() => createAccount()}>
          CREER UN COMPTE
        </button>
      </div>
    </div>
  );
};
