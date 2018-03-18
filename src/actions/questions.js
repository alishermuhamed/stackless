import { fromJS } from 'immutable';
import getQuestions from '../api/questions';
import * as types from '../constants';

const fetchQuestions = params => {
  return dispatch => {
    dispatch(requestQuestions());

    return getQuestions(params)
      .then(result => {
        const users = {};
        const questionsList = {};

        for (let obj of result.items) {
          users[obj['owner']['user_id']] = obj['owner'];
          obj['owner'] = obj['owner']['user_id'];
          questionsList[obj['question_id']] = obj;
        }
        return dispatch(receiveQuestions(fromJS({ users, questionsList })));
      })
      .catch(err => {
        dispatch(requestQuestionsFailed(err));
      });
  };
};

const requestQuestions = () => ({
  type: types.REQUEST_QUESTIONS
});

const receiveQuestions = json => ({
  type: types.RECEIVE_QUESTIONS,
  payload: fromJS(json)
});

const requestQuestionsFailed = err => ({
  type: types.RECEIVE_QUESTIONS_ERROR,
  payload: err
});

export default fetchQuestions;
