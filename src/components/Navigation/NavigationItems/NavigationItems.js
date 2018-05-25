import React from 'react';

import styles from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
  <ul className={styles.NavigationItems}>
    <li>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </li>
  </ul>
);

export default NavigationItems;
