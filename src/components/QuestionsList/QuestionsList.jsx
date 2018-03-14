import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { QuestionItem } from '../index';

const QuestionsList = ({ items, isFetching, errorMessage }) => {
  if (errorMessage) {
    return <h2>Api error occurred: {errorMessage}</h2>;
  } else if (isFetching) {
    return <h2>Loading...</h2>;
  } else if (items.count() === 0) {
    return <h2>No data.</h2>;
  } else
    return (
      <div>
        {items.map(item => (
          <QuestionItem key={item.get('question_id')} item={item} />
        ))}
      </div>
    );
};

QuestionsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.instanceOf(List),
  error: PropTypes.string
};

QuestionsList.defaultProps = {
  errorMessage: '',
  items: List()
};

export default QuestionsList;
