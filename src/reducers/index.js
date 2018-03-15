import { combineReducers } from 'redux';
import questions from './questions';
import question from './question';

export default combineReducers({
  questions,
  question
});
