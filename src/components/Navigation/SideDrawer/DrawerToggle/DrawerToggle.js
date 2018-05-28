import React from 'react';

import styles from './DrawerToggle.scss';

const DrawerToggle = props => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default DrawerToggle;
