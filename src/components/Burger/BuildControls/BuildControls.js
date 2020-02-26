import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];
 
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>The total prices is <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                deleted={() => props.ingredientDeleted(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls;