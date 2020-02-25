import React from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ( props ) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_,i) => {
                return <BurgerIngredient key={ ingKey + i } type={ ingKey }/>;
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
        transformIngredients = transformIngredients.length === 0 ? 
                            <p>Please add ingredients</p> : transformIngredients;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;