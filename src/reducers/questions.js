import * as types from '../constants';

const questions = (state = '', action) => {
  console.log(action);

  switch (action.type) {
    case types.NAV_BAR_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default questions;
