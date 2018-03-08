import { connect } from 'react-redux';
import QuestionsListComponent from '../components/QuestionsList';

const mapStateToProps = ({ questions }) => {
  if (questions && questions.items) return questions;
  else
    return {
      isFetching: true,
      items: []
    };
};

const QuestionsList = connect(mapStateToProps, null)(QuestionsListComponent);

export default QuestionsList;

// import React from 'react';
// import { fromJS, List } from 'immutable';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { QuestionListRowItem, User } from '../components';
// import { navBarFilter } from '../actions/questions';
// import { complexSearch } from '../api';

// class QuestionsList extends React.PureComponent {
//   static propTypes = {
//     match: PropTypes.shape({
//       params: PropTypes.shape({
//         search: PropTypes.node
//       }).isRequired
//     }).isRequired,
//     questions: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     navBarFilter: PropTypes.func.isRequired
//   };

//   static defaultProps = {
//     questions: ''
//   };

//   componentDidMount() {
//     const { match, navBarFilter } = this.props;

//     complexSearch({ q: match.params.search })
//       .then(response => {
//         const array = response.data.items;
//         navBarFilter(fromJS(array));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     const { questions } = this.props;

//     return (
//       <ul>
//         {questions &&
//           questions.map(obj => (
//             <li key={obj.get('question_id')}>
//               <QuestionListRowItem
//                 user={
//                   <User
//                     image={obj.getIn(['owner', 'profile_image'])}
//                     displayName={obj.getIn(['owner', 'display_name'])}
//                   />
//                 }
//                 votes={obj.get('score')}
//                 answerCount={obj.get('answer_count')}
//                 viewCount={obj.get('view_count')}
//                 title={obj.get('title')}
//                 lastActivityDate={obj.get('last_activity_date')}
//               />
//             </li>
//           ))}
//       </ul>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   questions: state.questions
// });

// const mapDispatchToProps = dispatch => ({
//   navBarFilter: bindActionCreators(navBarFilter, dispatch)
// });

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
// );
