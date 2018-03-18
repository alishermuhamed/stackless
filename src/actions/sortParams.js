import * as types from '../constants';

const search = value => ({
  type: types.UPDATE_SORT_PARAMS,
  payload: value
});

export default search;
