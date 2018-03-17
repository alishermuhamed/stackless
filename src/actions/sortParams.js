import * as types from '../constants';

const search = value => ({
  type: types.UPDATE_SEARCH_VALUE,
  payload: value
});

export default search;
