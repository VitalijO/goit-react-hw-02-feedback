import React from "react";
import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types';


const FeedbackOptions = ({onGoodFb, onNeutralFb,onBadFb}) => (
<div className="Conter__controls">
                <button type="button" className={css.btn} onClick={onGoodFb}> Good</button>
                <button type="button" className={css.btn}  onClick={onNeutralFb}> Neutral</button>
        <button type="button" className={css.btn} onClick={onBadFb}> Bad</button>
       
            </div> 
)

export default FeedbackOptions

FeedbackOptions.propTypes = {
    onGoodFb: PropTypes.func.isRequired,
    onNeutralFb: PropTypes.func.isRequired,
    onBadFb: PropTypes.func.isRequired
};