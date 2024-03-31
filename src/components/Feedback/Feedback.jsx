import css from './Feedback.module.css';

const Feedback = ({ feedbackObj, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = feedbackObj;

  return (
    <>
      <div className={css.container}>
        <p className={css.paragraph}>Good: {good}</p>
        <p className={css.paragraph}>Neutral: {neutral}</p>
        <p className={css.paragraph}>Bad: {bad}</p>
      </div>
      <div className={css.container}>
        <p className={css.paragraph}>Total: {feedbackTotal}</p>
        <p className={css.paragraph}>Positive: {feedbackPositive}%</p>
      </div>
    </>
  );
};

export default Feedback;
