import React from "react";



const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <div className="Statistics">  
        <p > Good: {good} </p>
        <p > Neutral : {neutral} </p>
        <p > Bad : { bad}</p>
        <p > Total : { total}</p>
        <p > Positive feedback : { positivePercentage } %</p>
</div>  
)

export default Statistics
