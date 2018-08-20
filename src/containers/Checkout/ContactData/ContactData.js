import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.scss';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Your Street" />
          <input type="text" name="postal" placeholder="Your PostalCode" />
          <div>
            <Button btnType="Success">Order</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactData;
