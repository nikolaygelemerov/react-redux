import React, { Component } from 'react';

import styles from './Burger.scss';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

class Burger extends Component {
  constructor(props) {
    super(props);

    this.burgerRef = React.createRef();
  }

  componentDidMount() {
    //console.log('burgerRef: ', this.burgerRef);
    //console.log('height: ', this.burgerRef.current.clientHeight);
  }

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

export default Burger;
