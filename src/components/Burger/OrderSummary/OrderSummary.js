import React, { Fragment, Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    //console.log('OrederSummary did update');
  }

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(
      igKey => {
        return (
          <li>
            <span style={{ textTransform: 'capitalize' }}>
              {igKey}: {this.props.ingredients[igKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
