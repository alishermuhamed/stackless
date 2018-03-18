export const getIsFetching = state => state.getIn(['tags', 'isFetching']);
export const getErrorMessage = state => state.getIn(['tags', 'error']);
export const getTags = state => state.getIn(['tags', 'items']);
