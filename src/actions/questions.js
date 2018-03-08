import fetch from 'cross-fetch';
import * as types from '../constants';

function requestQuestions() {
  return {
    type: types.REQUEST_QUESTIONS
  };
}

function receiveQuestions(json) {
  return {
    type: types.RECEIVE_QUESTIONS,
    items: json.items.map(i => i)
  };
}

export function fetchQuestions() {
  return dispatch => {
    dispatch(requestQuestions());
    return fetch(
      `${
        types.BASE_URL
      }questions?order=desc&sort=creation&site=stackoverflow&filter=!17vW0QaIf9HQp).D.h9)vwYi-Rr26cBczUBnv4Ei3RHsXP`
    )
      .then(response => response.json())
      .then(json => dispatch(receiveQuestions(json)));
  };
}

function requestQuestion() {
  return {
    type: types.REQUEST_QUESTION
  };
}

function receiveQuestion(json) {
  return {
    type: types.RECEIVE_QUESTION,
    question: json // map
  };
}

// search, tag
export function fetchQuestion(id) {
  return dispatch => {
    dispatch(requestQuestion());
    return fetch('url' + id) // api call
      .then(response => response.json())
      .then(json => dispatch(receiveQuestion(json)));
  };
}

export const navBarFilter = newData => {
  return {
    type: types.NAV_BAR_FILTER,
    payload: newData
  };
};
