export const getIsFetching = state => state.getIn(['questions', 'isFetching']);
export const getErrorMessage = state => state.getIn(['questions', 'error']);
export const getSortParams = state => state.getIn(['questions', 'sortParams']);

export const getOrder = state =>
  state.getIn(['questions', 'sortParams', 'order']);
export const getSort = state =>
  state.getIn(['questions', 'sortParams', 'sort']);
export const getAccepted = state =>
  state.getIn(['questions', 'sortParams', 'accepted']);
export const getClosed = state =>
  state.getIn(['questions', 'sortParams', 'closed']);

export const getUsers = state => state.getIn(['questions', 'users']);
export const getQuestionsList = state =>
  state.getIn(['questions', 'questionsList']);
