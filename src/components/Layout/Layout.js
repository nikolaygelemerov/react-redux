import React, { Fragment } from 'react';

import Aux from '../../hoc/Aux'; //can be replaced with React.Fragment since React 16.2
import styles from './Layout.scss';

const Layout = props => (
  <Fragment>
    <div />
    <main className={styles.content}>{props.children}</main>
  </Fragment>
);

export default Layout;
