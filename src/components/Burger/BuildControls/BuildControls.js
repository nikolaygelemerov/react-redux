import React from 'react';

import styles from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = props => (
    <div className={styles.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls
            .map(control => (
                <BuildControl 
                    key={control.label} 
                    label={control.label} 
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemove(control.type)}
                    disabled={props.disabledInfo[control.type]}
                />
            ))
        }
        <button 
            className={styles.OrderButton}
            disabled={!props.purchasable}
            >ORDER NOW
        </button>
    </div>
);

export default BuildControls;