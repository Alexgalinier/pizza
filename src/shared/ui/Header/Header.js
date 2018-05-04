import React from 'react';
import './Header.css';

export default ({ title, backClick, menuClick, children }) => (
  <div className="Header">
    {backClick ? (
      <i className="icon icon-arrow_back" onClick={backClick} />
    ) : (
      ''
    )}
    {menuClick ? <i className="icon icon-menu" onClick={menuClick} /> : ''}
    <h1>{title}</h1>
    {children}
  </div>
);
