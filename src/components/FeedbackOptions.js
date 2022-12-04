import React from "react";
import css from "./FeedbackOptions.module.css"


export const FeedbackOptions = ({onGoodFb, onNeutralFb,onBadFb}) => (
<div className="Conter__controls">
                <button type="button" className={css.btn} onClick={onGoodFb}> Good</button>
                <button type="button" className={css.btn}  onClick={onNeutralFb}> Neutral</button>
        <button type="button" className={css.btn} onClick={onBadFb}> Bad</button>
       
            </div> 
)

