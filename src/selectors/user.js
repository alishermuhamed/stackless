import { createSelector } from 'reselect';

export const getInfo = state => state.getIn(['user', 'userInfo']);
export const getErrorMessage = state => state.getIn(['user', 'error']);
export const getIsFetching = state => state.getIn(['user', 'isFetching']);
export const getQuestions = state => state.getIn(['user', 'questions']);

export const allTimeScore = createSelector(
  getQuestions,
  questions =>
    questions
      ? questions
          .valueSeq()
          .reduce(
            (sum, currentQuestion) => sum + +currentQuestion.get('score'),
            0
          )
      : undefined
);

export const allTimeAnswers = createSelector(
  getQuestions,
  questions =>
    questions
      ? questions
          .valueSeq()
          .reduce(
            (sum, currentQuestion) =>
              sum + +currentQuestion.get('answer_count'),
            0
          )
      : undefined
);
