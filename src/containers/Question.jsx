import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchQuestion from '../actions/question';
import QuestionComponent from '../components/Question';

class Question extends React.Component {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchQuestion(id));
  }

  render() {
    return <QuestionComponent question={this.props.question} />;
  }
}

Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired // should I declare all the PropTypes in every component?
};

const mapStateToProps = ({ question }, ownProps) => {
  return {
    id: ownProps.match.params.id,
    question: question
  };
};

export default connect(mapStateToProps)(Question);
