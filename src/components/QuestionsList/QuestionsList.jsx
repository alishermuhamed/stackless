import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { QuestionItem, QuestionAuthor } from '../index';

const QuestionsList = ({
  questions,
  allTimeScore,
  allTimeAnswers,
  isFetching,
  errorMessage
}) => {
  if (errorMessage) {
    return <h2>Ooops! Something went wrong: {errorMessage.toString()}</h2>;
  } else if (isFetching) {
    return <h2>Loading...</h2>;
  } else if (questions.count() === 0) {
    return <h2>No data.</h2>;
  } else
    return (
      <div>
        {!isNaN(allTimeScore) && <h1>Received votes total: {allTimeScore}</h1>}
        {!isNaN(allTimeAnswers) && (
          <h1>Received answers total: {allTimeAnswers}</h1>
        )}
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
  allTimeScore: PropTypes.number,
  allTimeAnswers: PropTypes.number,
  errorMessage: PropTypes.string
};

QuestionsList.defaultProps = {
  errorMessage: undefined,
  questions: List(),
  allTimeScore: undefined,
  allTimeAnswers: undefined
};

export default QuestionsList;
