// import React from 'react';
// import FeedbackOptions from 'components/feedback-options/FeedbackOptions';
// import Statistics from 'components/statistics/Statistics';
// import css from './FeedbackCounter.module.css';

// class FeedbackCounter extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleLeaveFeedback = (option) => {
//     this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;
//     const positiveFeedbackPercentage = ((good / countTotalFeedback) * 100).toFixed([0]);
    
//     return (
//       <div className={css.containerWrap}>
//         <h1>Pleas leave feedback</h1>
//         <FeedbackOptions
//           options={["good", "neutral", "bad"]}
//           onLeaveFeedback={this.handleLeaveFeedback}
//         />
//         <h2>Statistics</h2>
//         <Statistics
//           {...this.state}
//           total={countTotalFeedback}
//           positivePercentage={positiveFeedbackPercentage}
//         />
//      </div>
//     );
//   };
// };

// export default FeedbackCounter;

// -----------------------------------------------------------------------------

import React, { useState } from 'react';
import Statistics from 'components/statistics/Statistics';
import FeedbackOptions from 'components/feedback-options/FeedbackOptions';
import css from './FeedbackCounter.module.css';

const FeedbackCounter = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const { good, neutral, bad } = feedback;
  const countTotalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = countTotalFeedback ? ((good / countTotalFeedback) * 100).toFixed(0) : 0;

  return (
    <div className={css.containerWrap}>
      <h1>Please leave feedback</h1>
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleLeaveFeedback} />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    </div>
  );
};

export default FeedbackCounter;
