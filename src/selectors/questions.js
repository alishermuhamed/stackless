export const getIsFetching = state => state.get('questions').get('isFetching');
export const getErrorMessage = state => state.get('questions').get('error');
export const getSortParams = state => state.get('questions').get('sortParams');
export const getQuestions = state => state.get('questions').get('items');
