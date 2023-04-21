import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ul className={css.listBtn}>
      {options.map(option => (
        <li key={option}>
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
