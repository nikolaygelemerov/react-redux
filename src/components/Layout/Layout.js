import React, { Fragment } from 'react';

import Aux from '../../hoc/Aux'; //can be replaced with React.Fragment since React 16.2
import styles from './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => (
  <Fragment>
    <Toolbar />
    <main className={styles.content}>{props.children}</main>
  </Fragment>
);

export default Layout;
