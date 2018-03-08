import { connect } from 'react-redux';
import UserComponent from '../components/User';

const mapStateToProps = ({ user }, ownProps) => {
  return {
    userId: ownProps.match.params.id,
    displayName: user.displayName,
    profileImage: user.profileImage,
    answerCount: user.answerCount,
    questionCount: user.questionCount,
    questions: user.questions
  };
};

const User = connect(mapStateToProps, null)(UserComponent);

export default User;
