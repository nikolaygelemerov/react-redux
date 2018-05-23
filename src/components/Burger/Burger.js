import React from 'react';

import styles from './Burger.scss';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igngredientKey => {
      return [...Array(props.ingredients[igngredientKey])].map((_, index) => {
        return (
          <BurgerIngredient
            key={igngredientKey + index}
            type={igngredientKey}
          />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
