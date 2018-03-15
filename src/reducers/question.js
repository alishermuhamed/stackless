import * as types from '../constants';

const question = (
  state = {
    isFetching: false,
    item: {},
    error: {}
  },
  { type, question, error }
) => {
  switch (type) {
    case types.REQUEST_QUESTION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_QUESTION:
      return Object.assign({}, state, {
        isFetching: false,
        item: {
          title: question.title,
          body: question.body,
          score: question.score,
          creationDate: question.creation_date,
          owner: {
            userId: question.owner.user_id,
            profileImage: question.owner.profile_image,
            displayName: question.owner.display_name
          },
          comments: question.comments
            ? question.comments.map(com => {
                return {
                  score: com.score,
                  body: com.body,
                  creationDate: com.creation_date,
                  owner: {
                    userId: com.owner.user_id,
                    displayName: com.owner.display_name
                  }
                };
              })
            : [],
          tags: question.tags,
          answers: question.answers
            ? question.answers.map(ans => {
                return {
                  body: ans.body,
                  score: ans.score,
                  isAccepted: ans.is_accepted,
                  owner: {
                    profileImage: ans.owner.profile_image,
                    displayName: ans.owner.display_name,
                    userId: ans.owner.user_id
                  },
                  creationDate: ans.creation_date,
                  comments: ans.comments
                    ? ans.comments.map(com => {
                        return {
                          score: com.score,
                          body: com.body,
                          creationDate: com.creation_date,
                          owner: {
                            userId: com.owner.user_id,
                            displayName: com.owner.display_name
                          }
                        };
                      })
                    : []
                };
              })
            : []
        },
        error: {}
      });
    case types.RECEIVE_QUESTION_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        item: {},
        error: error
      });
    default:
      return state;
  }
};

export default question;
