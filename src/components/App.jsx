import React, { useState } from 'react';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Message } from './Message/Message';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return setGood + setNeutral + setBad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      +((setGood / countTotalFeedback()) * 100).toFixed(2) || 0;

    return positivePercentage;
  };

  const total = countTotalFeedback();
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Message message="There is no feedback " />
        )}
      </Section>
    </>
  );
}
