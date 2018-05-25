import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTransform: 'capitalize' }}>
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCancled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
