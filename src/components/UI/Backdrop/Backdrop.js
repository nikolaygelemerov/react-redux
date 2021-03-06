import React from 'react';

import styles from './Backdrop.scss';

const backdrop = props => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked} />
  ) : null;
};

export default backdrop;
