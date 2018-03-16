import { createSelector } from 'reselect';

export const getInfo = state => state.user.get('userInfo');
export const getErrorMessage = state => state.user.get('error');
export const getIsFetching = state => state.user.get('isFetching');
export const getQuestions = state => state.user.get('questions');

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
