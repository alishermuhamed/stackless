import getQuestion from '../api/question';
import * as types from '../constants';

function requestQuestion() {
  return {
    type: types.REQUEST_QUESTION
  };
}

function receiveQuestion(data) {
  return {
    type: types.RECEIVE_QUESTION,
    question: data.items[0]
  };
}

function receiveQuestionError(error) {
  return {
    type: types.RECEIVE_QUESTION_ERROR,
    error
  };
}

export default function fetchQuestion(id) {
  return dispatch => {
    dispatch(requestQuestion());
    return getQuestion(id).then(
      response => dispatch(receiveQuestion(response)),
      err => dispatch(receiveQuestionError(err.response.data))
    );
  };
}
