import fetch from 'cross-fetch';
import * as types from '../constants';

function requestQuestion() {
  return {
    type: types.REQUEST_QUESTION
  };
}

function receiveQuestion(json) {
  return {
    type: types.RECEIVE_QUESTION,
    question: json.items[0]
  };
}

export default function fetchQuestion(id) {
  return dispatch => {
    dispatch(requestQuestion());
    return fetch(`
      ${
        types.BASE_URL
      }questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=!SCZ)Qj709ZvesrSx8k1jzIxhrz6tgv6)OS.7fKCIwB5HCshQ8Ew2oaFze_U7iVae
    `)
      .then(response => response.json(), err => alert(err))
      .then(json => dispatch(receiveQuestion(json), err => alert(err))); // Read json and if it contains error then dispatch error
  };
}
