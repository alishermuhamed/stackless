import { connect } from 'react-redux';
import QuestionComponent from '../components/Question';

// Write props properly
const mapStateToProps = ({ question }, ownProps) => {
  return {
    question_id: ownProps.match.params.id,
    isFetching: question.isFetching
  };
};

const Question = connect(mapStateToProps, null)(QuestionComponent);

export default Question;
