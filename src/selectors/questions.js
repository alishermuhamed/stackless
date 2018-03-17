export const getIsFetching = state => state.getIn(['questions', 'isFetching']);
export const getErrorMessage = state => state.getIn(['questions', 'error']);
export const getSortParams = state => state.getIn(['questions', 'sortParams']);
export const getQuestions = state => state.getIn(['questions', 'items']);
