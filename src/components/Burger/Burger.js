import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Burger.scss';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

class Burger extends Component {
  constructor(props) {
    super(props);

    this.burgerRef = React.createRef();
  }

  componentDidMount() {}

  render() {
    let transformedIngredients = Object.keys(this.props.ingredients)
      .map(igngredientKey => {
        return [...Array(this.props.ingredients[igngredientKey])].map(
          (_, index) => {
            return (
              <BurgerIngredient
                key={igngredientKey + index}
                type={igngredientKey}
              />
            );
          }
        );
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
      <div className={styles.Burger} ref={this.burgerRef}>
        <div className={styles.IngredientsWrapper}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
        </div>
      </div>
    );
  }
}

export default withRouter(Burger);
