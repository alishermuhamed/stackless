import { Map, fromJS } from 'immutable';
import getQuestions from '../api/questions';
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

    return getQuestions(
      page,
      pageSize,
      fromDate,
      toDate,
      order,
      sort,
      q,
      accepted,
      closed
    )
      .then(data => {
        dispatch(receiveQuestions(data));
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
