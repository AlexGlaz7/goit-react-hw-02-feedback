import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <FeedbackList>
          {options.map(option => (
              <FeedbackItem key={option}>
                  <FeedbackBtn type="button" onClick={() => onLeaveFeedback(option)}>
                      {option}
                  </FeedbackBtn>
              </FeedbackItem>
          ))}
      </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;