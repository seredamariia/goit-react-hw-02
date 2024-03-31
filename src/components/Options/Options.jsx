import css from './Options.module.css';

const Options = ({ onClickFeedback, totalFeedback, resetButton }) => {
  return (
    <ul className={css.buttonsList}>
      <li>
        <button onClick={() => onClickFeedback('good')}>Good</button>
      </li>
      <li>
        <button onClick={() => onClickFeedback('neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onClickFeedback('bad')}>Bad</button>
      </li>
      {totalFeedback >= 1 && (
        <li>
          <button onClick={resetButton}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
