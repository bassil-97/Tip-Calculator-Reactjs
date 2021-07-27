import React from 'react';
import classes from './Input.module.css';

export default function Input(props) {

   
    const handleNumberOfPeople = e => {
        if(e.target.value === '') {
            props.handleChange(0);
        } else {
            props.handleChange(e.target.value);
        }
    }

    return (
        <div className={classes.input__container}>
            <label>{props.label}</label>
            <input 
                type="number"
                placeholder="0"
                onChange={(e)=> props.handleChange(e.target.value)}
                value={props.value}
            />
        </div>
    )
}
