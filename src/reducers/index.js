import { combineReducers } from 'redux-immutable';
import questions from './questions';
import question from './question';
import tags from './tags';
import user from './user';

export default combineReducers({
  questions,
  question,
  tags,
  user
});
