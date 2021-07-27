import React from 'react';
import classes from './CustomTipAmount.module.css';

export default function CustomTipAmount(props) {
    return (
        <input 
            className={classes.custom__tip_amount} 
            placeholder="Custom"
            onChange={(e) => props.handleAmount(e.target.value)}
        />
    )
}
