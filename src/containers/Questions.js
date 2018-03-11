import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Questions extends React.PureComponent {
  render() {
    const { questions } = this.props;
    // console.dir(questions);
    return 'asdf';
    /*return (
      <ul>
        {questions &&
          questions.map(obj => (
            <li key={obj.get('question_id')}>
              <ListRowItem
                user={
                  <User
                    image={obj.getIn(['owner', 'profile_image'])}
                    displayName={obj.getIn(['owner', 'display_name'])}
                  />
                }
                votes={obj.get('score')}
                answerCount={obj.get('answer_count')}
                viewCount={obj.get('view_count')}
                title={obj.get('title')}
                lastActivityDate={obj.get('last_activity_date')}
              />
            </li>
          ))}
      </ul>
    );*/
  }
}

export default Questions;
