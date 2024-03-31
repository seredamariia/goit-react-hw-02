import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';

import { useState, useEffect } from 'react';

function App() {
  const feedbackTypes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('saved-values');
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return feedbackTypes;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-values', JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
  );

  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedbackButton = () => setValues(feedbackTypes);

  return (
    <>
      <Description />
      <Options
        onClickFeedback={feedbackType => updateFeedback(feedbackType)}
        totalFeedback={totalFeedback}
        resetButton={resetFeedbackButton}
      />
      {totalFeedback >= 1 && (
        <Feedback
          feedbackObj={values}
          feedbackTotal={totalFeedback}
          feedbackPositive={positiveFeedback}
        />
      )}
      {totalFeedback < 1 && <Notification />}
    </>
  );
}

export default App;
