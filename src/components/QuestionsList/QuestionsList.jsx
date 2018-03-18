import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { QuestionItem, QuestionAuthor } from '../index';

const QuestionsList = ({
  questions,
  users,
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
        {questions
          .entrySeq()
          .map(([key, value]) => (
            <QuestionItem
              key={key}
              question={value}
              user={users.get(String(value.get('owner')))}
              render={user => (
                <QuestionAuthor
                  userId={user.get('user_id')}
                  displayName={user.get('display_name')}
                  profileImage={user.get('profile_image')}
                />
              )}
            />
          ))}
      </div>
    );
};

QuestionsList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  questions: PropTypes.instanceOf(Map).isRequired,
  users: PropTypes.instanceOf(Map),
  allTimeScore: PropTypes.number,
  allTimeAnswers: PropTypes.number,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

QuestionsList.defaultProps = {
  errorMessage: undefined,
  allTimeScore: undefined,
  allTimeAnswers: undefined,
  users: Map()
};

export default QuestionsList;
