import React, { Fragment } from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.scss';

const CheckoutSummary = props => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <div style={{ marginTop: '300px' }}>
        <Button btnType="Danger" clicked={props.checkoutCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
