import React, { Component } from 'react';
import { Container } from './Add.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    console.log(good);
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count);
  }

  positiveFeed = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutralFeed = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  negativeFeed = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            positive={this.positiveFeed}
            negative={this.negativeFeed}
            neutral={this.neutralFeed}
          />
        </Section>

        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </Container>
    );
  }
}
