import { fromJS } from 'immutable';
import getQuestions from '../api/questions';
import * as types from '../constants';

const fetchQuestions = params => {
  return dispatch => {
    dispatch(requestQuestions(params));

    return getQuestions(params)
      .then(data => {
        dispatch(receiveQuestions(data));
      })
      .catch(err => {
        dispatch(requestQuestionsFailed(err));
      });
  };
};

const requestQuestions = params => ({
  type: types.REQUEST_QUESTIONS,
  payload: params
});

const receiveQuestions = json => ({
  type: types.RECEIVE_QUESTIONS,
  payload: fromJS(json.items)
});

const requestQuestionsFailed = err => ({
  type: types.REQUEST_QUESTIONS_ERROR,
  payload: err
});

export default fetchQuestions;
