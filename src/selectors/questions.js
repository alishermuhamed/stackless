export const getIsFetching = state => state.getIn(['questions', 'isFetching']);
export const getErrorMessage = state => state.getIn(['questions', 'error']);
export const getFilterParams = state =>
  state.getIn(['questions', 'filterParams']);

export const getAnswers = state =>
  state.getIn(['questions', 'filterParams', 'answers']);
export const getAccepted = state =>
  state.getIn(['questions', 'filterParams', 'accepted']);
export const getClosed = state =>
  state.getIn(['questions', 'filterParams', 'closed']);

export const getUsers = state => state.getIn(['questions', 'users']);
export const getQuestionsList = state =>
  state.getIn(['questions', 'questionsList']);
