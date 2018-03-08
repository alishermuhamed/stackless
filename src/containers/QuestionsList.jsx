import React from 'react';
import { fromJS, List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { QuestionListRowItem, User } from '../components';
import { navBarFilter } from '../actions/questions';
import { complexSearch } from '../api';

class QuestionsList extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        search: PropTypes.node
      }).isRequired
    }).isRequired,
    questions: PropTypes.instanceOf(List).isRequired
  };

  constructor(props) {
    super(props);

    const { match } = this.props;

    complexSearch({ q: match.params.search })
      .then(response => {
        const array = response.data.items;
        navBarFilter(fromJS(array));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { questions } = this.props;
    console.dir(questions);
    return 'asdf';
    /*return (
      <ul>
        {questions.map(obj => (
          <li key={obj.question_id}>
            <QuestionListRowItem
              user={
                <User
                  image={obj.profile_image}
                  displayName={obj.display_name}
                />
              }
              votes={obj.score}
              answerCount={obj.answer_count}
              viewCount={obj.view_count}
              title={obj.title}
              lastActivityDate={obj.last_activity_date}
            />
          </li>
        ))}
      </ul>
    );*/
  }
}

const mapStateToProps = state => ({
  questions: state.questions
});

const mapDispatchToProps = dispatch => ({
  navBarFilter: bindActionCreators(navBarFilter, dispatch)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionsList)
);
