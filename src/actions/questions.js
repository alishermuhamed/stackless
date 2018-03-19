import { fromJS } from 'immutable';
import getQuestions from '../api/questions';
import * as types from '../constants';

export const fetchQuestions = () => {
  return (dispatch, getState) => {
    dispatch({ type: types.REQUEST_QUESTIONS });
    dispatch(receiveQuestions(getState().getIn(['questions', 'filterParams'])));
  };
};

const receiveQuestions = params => {
  return dispatch => {
    getQuestions(params)
      .then(result => {
        const users = {};
        const questionsList = {};

        for (let obj of result.items) {
          users[obj['owner']['user_id']] = obj['owner'];
          obj['owner'] = obj['owner']['user_id'];
          questionsList[obj['question_id']] = obj;
        }
        return dispatch({
          type: types.RECEIVE_QUESTIONS,
          payload: fromJS({ users, questionsList })
        });
      })
      .catch(err => {
        dispatch({
          type: types.RECEIVE_QUESTIONS_ERROR,
          payload: err
        });
      });
  };
};

export const updateFilterParams = value => ({
  type: types.UPDATE_FILTER_PARAMS,
  payload: value
});
