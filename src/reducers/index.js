import { combineReducers } from 'redux';
import questions from './questions';
import question from './question';
import user from './user';

export default combineReducers({
  questions,
  question,
  user
});
