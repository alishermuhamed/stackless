import * as types from '../constants';

const question = (
  state = {
    isFetching: false,
    title: ''
  },
  { type, question }
) => {
  switch (type) {
    case types.REQUEST_QUESTION:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_QUESTION:
      return Object.assign({}, state, {
        isFetching: false,
        title: question.title,
        body: question.body,
        score: question.score,
        creationDate: question.creation_date,
        owner: {
          profileImage: question.owner.profile_image,
          displayName: question.owner.display_name
        },
        tags: question.tags,
        answers: question.answers.map(ans => {
          return {
            body: ans.body,
            score: ans.score,
            owner: {
              profileImage: ans.owner.profile_image,
              displayName: ans.owner.display_name,
              userId: ans.owner.user_id
            },
            creationDate: ans.creation_date
          };
        })
      });
    default:
      return state;
  }
};

export default question;
