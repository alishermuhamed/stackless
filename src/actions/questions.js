import * as types from '../constants';

const navBarFilter = newData => {
  return {
    type: types.NAV_BAR_FILTER,
    payload: newData
  };
};

export default navBarFilter;
