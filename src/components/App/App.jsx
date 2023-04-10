import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import  Notification from '../Notification/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClickFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
  };

  totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  positivePercentageFeedback = ({ good }) => {
    const percentageFeedback = Number(
      ((good / this.totalFeedback(this.state)) * 100).toFixed(0)
    );
    return percentageFeedback > 0 ? percentageFeedback : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
   
    const { totalFeedback, positivePercentageFeedback } = this;

    const options = Object.keys(this.state);
    const total = totalFeedback(this.state);
    const positivePercentage = positivePercentageFeedback(this.state);

    return (
      <div>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickFeedback}
          />
        </Section>

       
        <Section title={"Statistics"}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
