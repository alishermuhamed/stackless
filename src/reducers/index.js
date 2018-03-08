import { combineReducers } from 'redux';
import questions from './questions';
import tags from './tags';

export default combineReducers({
  questions,
  tags
});
