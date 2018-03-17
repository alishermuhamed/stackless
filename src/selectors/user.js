import { createSelector } from 'reselect';

export const getInfo = state => state.get('user').get('userInfo');
export const getErrorMessage = state => state.get('user').get('error');
export const getIsFetching = state => state.get('user').get('isFetching');
export const getQuestions = state => state.get('user').get('questions');

export const allTimeScore = createSelector(
  getQuestions,
  questions =>
    questions
      ? questions.reduce(
          (sum, currentQuestion) => sum + +currentQuestion.get('score'),
          0
        )
      : undefined
);

export const allTimeAnswers = createSelector(
  getQuestions,
  questions =>
    questions
      ? questions.reduce(
          (sum, currentQuestion) => sum + +currentQuestion.get('answer_count'),
          0
        )
      : undefined
);
