import React from 'react';

import Aux from '../../hoc/Aux'; //can be replaced with React.Fragment since React 16.2
import styles from './Layout.scss';

const Layout = (props) => (
    <React.Fragment>
        <div></div>
        <main className={styles.content}>
            {props.children}
        </main>
    </React.Fragment>
);

export default Layout;