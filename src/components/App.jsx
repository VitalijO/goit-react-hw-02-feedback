import React from 'react';
import './FeedbackOptions.module.css';
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
    hendleIncrementGood=()=> {
        this.setState(prevState => {
            return {
            good: prevState.good+1
        }
          
      })
    }
    hendleIncrementNeutral = () => {
        this.setState(prevState => {
            return {
            neutral: prevState.neutral+1
        }
      })
    }

        hendleIncrementBad=()=> {
        this.setState(prevState => {
            return {
            bad: prevState.bad+1
        }
          
      })
        }
  
  
    countTotalFeedback = () => {
   let total = this.state.good+this.state.neutral+this.state.bad
            return total
    }

    countPositiveFeedbackPercentage = () => {
       let total = Math.round((this.state.good / this.countTotalFeedback())*100) 
        return  total
    }
  
  render()

  {
    const { bad, good, neutral } = this.state;
   
  return (
      <> 
      <section title='FeedbackOptions'> 
        <h2> Please leave feedback</h2>
           <FeedbackOptions
                onGoodFb={this.hendleIncrementGood}
                onNeutralFb={this.hendleIncrementNeutral}
          onBadFb={this.hendleIncrementBad}
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