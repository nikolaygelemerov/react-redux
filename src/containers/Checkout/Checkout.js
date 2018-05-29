import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  componentDidMount() {
    console.log('this.props: ', this.props);
    const query = new URLSearchParams(this.props.location.search);
    console.log('query: ', query.entries());
    const ingredients = query.entries().reduce((accum, element, index) => {
      accum[element[0]] = +element[1];
      return accum;
    }, {});

    this.setState({ ingredients: ingredients });
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default withRouter(Checkout);
