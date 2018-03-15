import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { QuestionItem, QuestionAuthor } from '../index';

const QuestionsList = ({ questions, isFetching, errorMessage }) => {
  if (errorMessage) {
    return <h2>Api error occurred: {errorMessage.toString()}</h2>;
  } else if (isFetching) {
    return <h2>Loading...</h2>;
  } else if (questions.count() === 0) {
    return <h2>No data.</h2>;
  } else
    return (
      <div>
        {questions.map(question => (
          <QuestionItem
            key={question.get('question_id')}
            question={question}
            Author={
              question.has('owner') && (
                <QuestionAuthor
                  userId={question.getIn(['owner', 'user_id'])}
                  displayName={question.getIn(['owner', 'display_name'])}
                  profileImage={question.getIn(['owner', 'profile_image'])}
                />
              )
            }
          />
        ))}
      </div>
    );
};

QuestionsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.instanceOf(List),
  error: PropTypes.node
};

QuestionsList.defaultProps = {
  errorMessage: '',
  questions: List()
};

export default QuestionsList;
