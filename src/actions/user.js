import fetch from 'cross-fetch';
import * as types from '../constants';

function requestUser() {
  return {
    type: types.REQUEST_USER
  };
}

function receiveUser(json) {
  return {
    type: types.RECEIVE_USER,
    user:json
  };
}

function fetchUser(id) {
  return dispatch => {
    dispatch(requestUser());
    return fetch(
      `${
        types.BASE_URL
      }users/${id}?order=desc&sort=creation&site=stackoverflow&filter=!)scWyX4tXd._RgHyXMor`
    ) 
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
      .catch(err => {
        console.log(err);
        return dispatch(requestQuestionsFailed(err));
      });
  };
}

export default fetchUser;
//https://api.stackexchange.com/2.2/users/7122746?order=desc&sort=creation&site=stackoverflow&filter=!)scWyX4tXd._RgHyXMor