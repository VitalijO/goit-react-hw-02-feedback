import React from 'react';
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions"
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import PropTypes from 'prop-types';


class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,      
}
 
  countTotalFeedback = () => {
  const{good, neutral, bad}=this.state
  const total = good + neutral + bad
  return total
    }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state 
    const {countTotalFeedback} = this
    const total = Math.round((good / countTotalFeedback())*100) 
    return  total
    }
  
onIncrementFb = e => {
  const type= e.target.textContent;
  this.setState(prevState =>
  ({
    [type]: prevState[type] + 1
  }))
  }

  
render()

  {
  const{onIncrementFb, state}=this
  const { bad, good, neutral } = this.state;
  const typeFb = Object.keys(state);
  


  return (
    <div> 
      
      <Section title= {"Please leave feedback"}>
  <FeedbackOptions
          options={typeFb}
          onLeaveFeedback={onIncrementFb}
        />
    </Section>



        {this.countTotalFeedback() === 0 ?
        (
          <Notification message="There is no feedback" />)
          :
        (<Section title={"Statistic"}>  
          <Statistics 
             
        good={ good}
        neutral={ neutral}
        bad={bad}
        total={ this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()} />
         </Section>  )}  
    </div>  
    );
}
}


export default App;

Statistics.propTypes = {
   good :PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad :PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}