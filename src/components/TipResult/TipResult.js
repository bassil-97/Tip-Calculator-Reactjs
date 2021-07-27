import React from 'react';
import classes from './TipResult.module.css';

export default function TipResult(props) {
    return (
        <div className={classes.tip__res}>
            <div className={classes.total__tip}>
                <div className={classes.title}>
                    <h5>Tip Amount</h5>
                    <small>/ person</small>
                </div>
                <div className={classes.result}>
                    <h2>${props.tip}</h2>
                </div>
            </div>
            <div className={classes.total__tip}>
                <div className={classes.title}>
                    <h5>Total</h5>
                    <small>/ person</small>
                </div>
                <div className={classes.result}>
                    <h2>${props.totalTip}</h2>
                </div>
            </div>
            <button 
                type="button"
                className={classes.reset__btn}
                disabled={props.isDisabled}
                onClick={props.onReset}
            >RESET</button>
        </div>
    )
}
