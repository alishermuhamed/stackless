import { connect } from 'react-redux';
import QuestionComponent from '../components/Question';

// where to put match to pass an id?
const mapStateToProps = ({ question }, ownProps) => {
  return {
    questionId: ownProps.match.params.id,
    title: question.title,
    score: question.score,
    body: question.body,
    owner: question.owner,
    creationDate: question.creationDate,
    answers: question.answers
  };
};

const Question = connect(mapStateToProps, null)(QuestionComponent);

export default Question;
