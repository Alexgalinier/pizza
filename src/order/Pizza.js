import React from 'react';

export default ({ name, image, price, ingredients, quantity, size }) => (
  <div className="Pizza">
    <div className="pizza-image">
      <img src={image} alt={name} />
    </div>
    <div className="pizza-infos">
      <div className="pizza-name">
        {name} (x{quantity})
      </div>
      <div className="pizza-ingredients">{ingredients.join(', ')}</div>
      <div className="pizza-price">
        <span>{price[size] * quantity}€</span>
      </div>
    </div>
  </div>
);
