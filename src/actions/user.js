import { fromJS } from 'immutable';
import {
  getUserQuestions,
  getUserQuestionsCount,
  getUserAnswersCount
} from '../api';
import * as types from '../constants';

const fetchUser = id => {
  return dispatch => {
    dispatch(requestUser());

    return Promise.all([
      getUserQuestionsCount(id),
      getUserAnswersCount(id),
      getUserQuestions(id)
    ])
      .then(resultArray => {
        const questionsCount = resultArray[0].total;
        const answersCount = resultArray[1].total;
        const questionArray = resultArray[2].items;
        if (questionArray.length === 0)
          return Promise.reject({ message: 'У пользователя нет вопросов' });

        const userInfo = {
          ...questionArray[0].owner,
          questionsCount: questionsCount,
          answersCount: answersCount
        };
        const questions = questionArray.map(obj => {
          delete obj.owner;
          return obj;
        });
        return fromJS({
          userInfo,
          questions
        });
      })
      .then(json => dispatch(receiveUser(json)))
      .catch(err => dispatch(requestUserFailed(err.message)));
  };
};

const requestUser = () => {
  return {
    type: types.REQUEST_USER
  };
};

const receiveUser = json => ({
  type: types.RECEIVE_USER,
  payload: json
});

const requestUserFailed = err => ({
  type: types.RECEIVE_USER_ERROR,
  payload: err
});

export default fetchUser;
