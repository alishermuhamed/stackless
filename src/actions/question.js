import axios from 'axios';
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
    return axios
      .get(
        `${
          types.BASE_URL
        }questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=!-lBwSMnedIpLk8ZyeX8Bj5(Pnwri1)nmwFrnCOvfxTcVEgZ.Oc-tqP`
      )
      .then(
        response => dispatch(receiveQuestion(response.data)),
        err => dispatch(receiveQuestionError(err.response.data))
      );
  };
}
