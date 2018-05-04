import React from 'react';

export default ({ name, image, price, ingredients, onClick }) => (
  <div className="Pizza" onClick={onClick}>
    <div className="pizza-image">
      <img src={image} alt={name} />
    </div>
    <div className="pizza-infos">
      <div className="pizza-name">{name}</div>
      <div className="pizza-ingredients">{ingredients.join(', ')}</div>
      <div className="pizza-price">
        <span>A partir de</span>
        <span>{price.S}€</span>
      </div>
    </div>
  </div>
);
