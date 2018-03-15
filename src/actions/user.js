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

const requestUserFailed = err => ({
  type: types.REQUEST_USER_FAILED,
  payload: err
});

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



// https://api.stackexchange.com/2.2/users/7122746/questions?order=desc&sort=activity&site=stackoverflow&filter=!BHMsVe-)xNO9rXmOcpxO8M(cSp6bHe&key=FWgOPj7j5DKXZG4DgyClig((