import { createSelector } from 'reselect';

export const getInfo = state => state.user.get('userInfo');
export const getQuestions = state => state.user.get('questions');
export const getErrorMessage = state => state.user.get('error');
export const getIsFetching = state => state.user.get('isFetching');

export const allTimeScore = createSelector(getQuestions, questions =>
  questions.reduce(
    (sum, currentQuestion) => sum + +currentQuestion.get('score'),
    0
  )
);

export const allTimeAnswers = createSelector(getQuestions, questions =>
  questions.reduce(
    (sum, currentQuestion) => sum + +currentQuestion.get('answer_count'),
    0
  )
);
