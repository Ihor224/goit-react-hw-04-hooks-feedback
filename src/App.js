import { useState } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';
import FeedbackOptions from './Components/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const total = () => good + neutral + bad;
  const positivePercentage = () => Math.round((good / total()) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onIncrement={handleIncrement} />
      </Section>

      <Section title="Statistic">
        {total() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            percent={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Container>
  );
}
