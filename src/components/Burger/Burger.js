import React from 'react';

import styles from './Burger.scss';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const Burger = props => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igngredientKey => {
            return [...Array(props.ingredients[igngredientKey])]
                .map((_, index) => {
                    return <BurgerIngredient key={igngredientKey + index} type={igngredientKey} />
                });
        })

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;