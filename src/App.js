import React, { Component, StrictMode } from 'react';
import logo from './logo.svg';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <StrictMode>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </StrictMode>
    );
  }
}

export default App;
