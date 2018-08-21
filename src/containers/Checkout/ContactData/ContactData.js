import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = async event => {
    event.preventDefault();

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Nikolay Gelemerov',
        address: {
          street: 'Teststreet 1',
          zipCode: '3424',
          country: 'Buglaria'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };

    console.log('order: ', order);

    this.setState({ loading: true });

    try {
      const response = await axios.post('orders.json', order);
      this.setState({ loading: false, purchasing: false });
      this.props.history.push('/');
    } catch (error) {
      console.error(error);
      this.setState({ loading: false, purchasing: false });
    }
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Your Street" />
        <input type="text" name="postal" placeholder="Your PostalCode" />
        <div>
          <Button btnType="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </div>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
