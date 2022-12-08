import React from "react";
import css from "./FeedbackOptions.module.css"
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback }) => (

 < >
      {options.map(children => (
        <button className={css.btn} key={children} onClick={onLeaveFeedback}>
          {children}
        </button>
      ))}
    </ >
)

export default FeedbackOptions

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};