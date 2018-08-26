import React from 'react';

import classes from './Order.scss';
const Order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      amount: props.ingredients[ingredientName],
      name: ingredientName
    });
  }

  const ingredientOutput = ingredients.map(ingredient => (
    <span key={ingredient.name}>
      {ingredient.name}: {ingredient.amount}
    </span>
  ));

  return (
    <div className={classes.Order}>
      <p>{ingredientOutput}</p>
      <p>
        Price <strong>USD {props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
