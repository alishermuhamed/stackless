import { fromJS } from 'immutable';
import {
  getUserQuestions,
  getUserQuestionsCount,
  getUserAnswersCount
} from '../api/user';
import * as types from '../constants';

const fetchUser = id => {
  return dispatch => {
    dispatch(requestUser());

    return Promise.all([
      getUserQuestionsCount(id),
      getUserAnswersCount(id),
      getUserQuestions(id)
    ])
      .then(result => {
        const questionsCount = result[0].total;
        const answersCount = result[1].total;
        const questionArray = result[2].items;
        if (questionArray.length === 0)
          return Promise.reject({
            message: 'У пользователя нет вопросов'
          });

        const userInfo = {
          ...questionArray[0]['owner'],
          questionsCount: questionsCount,
          answersCount: answersCount
        };

        const questions = questionArray.reduce((acc, cur) => {
          delete cur['owner'];
          acc[cur['question_id']] = cur;
          return acc;
        }, {});

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
