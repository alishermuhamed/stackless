export const getIsFetching = state => state.getIn(['questions', 'isFetching']);
export const getErrorMessage = state => state.getIn(['questions', 'error']);
export const getSortParams = state => state.getIn(['questions', 'sortParams']);

export const getUsers = state => state.getIn(['questions', 'users']);
export const getQuestionsList = state =>
  state.getIn(['questions', 'questionsList']);
