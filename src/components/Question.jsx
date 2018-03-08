import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // to owner or answerer
import { fetchQuestion } from '../actions/questions';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchQuestion(id)); // get ID from match
  }

  render() {
    return <div>Question</div>;
  }
}

// Fill proptypes
Question.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Question;
