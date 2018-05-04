import React from 'react';
import {
  changeSize,
  incQuantity,
  decQuantity,
  addToOrder
} from 'App.actions.js';

export default ({
  name,
  image,
  ingredients,
  price,
  selectedSize,
  selectedQuantity
}) => {
  const Size = (text, size) => (
    <div
      className={'size' + (selectedSize === size ? ' selected' : '')}
      onClick={() => changeSize(size)}
    >
      {text} {price[size]}€
    </div>
  );

  return (
    <div className="SelectedPizza">
      <div className="selected-pizza-image">
        <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="selected-pizza-ingredients">
        <div className="label">Ingrédients</div>
        <div className="content">{ingredients.join(', ')}</div>
      </div>
      <div className="selected-pizza-size">
        <div className="label">Tailles</div>
        <div className="content">
          {Size('Petite', 'S')}
          {Size('Normale', 'N')}
          {Size('Grande', 'B')}
        </div>
      </div>
      <div className="selected-pizza-quantity">
        <div className="label">Quantité</div>
        <div className="content">
          <span>{selectedQuantity}</span>
          <button onClick={() => incQuantity()}>+</button>
          <button onClick={() => decQuantity()}>-</button>
        </div>
      </div>
      <div className="selected-pizza-add">
        <button onClick={() => addToOrder()}>AJOUTER A MA COMMANDE</button>
      </div>
    </div>
  );
};
