import * as types from '../constants';

function requestUser() {
  return {
    type: types.REQUEST_USER
  };
}

function receiveUser(json) {
  return {
    type: types.RECEIVE_USER,
    user: json // map
  };
}

export function fetchUser(id) {
  return dispatch => {
    dispatch(requestUser());
    return fetch('url' + id) // api call
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)));
  };
}

function requestUserQuestions() {
  return {
    type: types.REQUEST_USER_QUESTIONS
  };
}

function receiveUserQuestions(json) {
  return {
    type: types.RECEIVE_USER_QUESTIONS,
    questions: json // map
  };
}

export function fetchUserQuestions(id) {
  return dispatch => {
    dispatch(requestUserQuestions());
    return fetch('url' + id) // api call
      .then(response => response.json())
      .then(json => dispatch(receiveUserQuestions(json)));
  };
}
