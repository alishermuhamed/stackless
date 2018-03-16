import axios from 'axios';
import { Map, fromJS } from 'immutable';
import * as types from '../constants';

const fetchQuestions = ({
  page = 1,
  pageSize = 10,
  fromDate = '',
  toDate = '',
  order = 'desc',
  sort = 'activity',
  q = '',
  accepted = '',
  closed = ''
}) => {
  return dispatch => {
    dispatch(
      requestQuestions({
        page,
        pageSize,
        fromDate,
        toDate,
        order,
        sort,
        q,
        accepted,
        closed
      })
    );

    return axios
      .get(
        `${types.BASE_URL}search/advanced?page=${page}` +
          `&pagesize=${pageSize}&fromdate=${fromDate}&todate=${toDate}` +
          `&order=${order}&sort=${sort}&q=${q}&accepted=${accepted}` +
          `&closed=${closed}&site=stackoverflow` +
          `&filter=!.FjwPGLxmyYTh_1x.CPOGnXs*)C_y${types.KEY}`
      )
      .then(json => {
        dispatch(receiveQuestions(json.data));
      })
      .catch(err => {
        dispatch(requestQuestionsFailed(err));
      });
  };
};

const requestQuestions = ({
  page = 1,
  pageSize = 10,
  fromDate = '',
  toDate = '',
  order = 'desc',
  sort = 'activity',
  q = '',
  accepted = '',
  closed = ''
}) => ({
  type: types.REQUEST_QUESTIONS,
  payload: Map({
    page,
    pageSize,
    fromDate,
    toDate,
    order,
    sort,
    q,
    accepted,
    closed
  })
});

const receiveQuestions = json => ({
  type: types.RECEIVE_QUESTIONS,
  payload: fromJS(json.items)
});

const requestQuestionsFailed = err => ({
  type: types.REQUEST_QUESTIONS_ERROR,
  payload: err
});

export default fetchQuestions;
