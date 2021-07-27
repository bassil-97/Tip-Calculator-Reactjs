import React from 'react';
import classes from './TipAmount.module.css';

export default function TipAmount(props) {
    return (
        <div className={classes.tip__amount} onClick={()=> props.handleAmount(props.amount)}>
            {props.amount}%
        </div>
    )
}
