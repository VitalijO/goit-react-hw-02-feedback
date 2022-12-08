import React from 'react';
import FeedbackOptions  from "./FeedbackOptions"
import Statistics from './Statistics';
import PropTypes from 'prop-types';


class App extends React.Component {
static defaultProps = {
 good: 0,
  neutral: 0,
  bad: 0
}
    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
        
}
 
countTotalFeedback = () => {
   let total = this.state.good+this.state.neutral+this.state.bad
            return total
    }

countPositiveFeedbackPercentage = () => {
       let total = Math.round((this.state.good / this.countTotalFeedback())*100) 
        return  total
    }
  
onIncrementFb = e => {
    const type= e.target.textContent;
    this.setState(prevState=>({[type]:prevState[type]+1}))
  }

  
render()

  {
    const{onIncrementFb, state}=this
    const { bad, good, neutral } = this.state;
    const typeFb= Object.keys(state);
  return (
      <> 
      <section title='FeedbackOptions'> 
        <h2> Please leave feedback</h2>
           <FeedbackOptions
          options={typeFb}
          onLeaveFeedback={onIncrementFb}
        />
      </section>
         
      <section title='Statistic'> 
        <h2> Statistic</h2>

        {this.countTotalFeedback() === 0 ?
          (<p> There is no feedback</p>)
          :
          (<Statistics 
             
        good={ good}
        neutral={ neutral}
        bad={bad}
        total={ this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()} />
          )}  
        </section>    
    </>  
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