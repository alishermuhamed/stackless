import React from 'react';
import PropTypes from 'prop-types';
import { fetchUser, fetchUserQuestions } from '../actions/user';
import { Link } from 'react-router-dom'; // to owner or answerer

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(fetchUser(id));
    dispatch(fetchUserQuestions(id));
  }

  render() {
    return <div>User</div>;
  }
}

// Fill proptypes
User.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
  // name: PropTypes.string.isRequired,
  // avatarUrl: PropTypes.string.isRequired,
  // answersCount: PropTypes.number.isRequired,
  // questionsCount: PropTypes.number.isRequired,
  // questions: PropTypes.arrayOf().isRequired
};

export default User;

// import React from 'react';
// import PropTypes from 'prop-types';

// const User = ({ image, displayName }) => {
//   return (
//     <React.Fragment>
//       <img src={image} alt="not displayed" />
//       <h3>{displayName}</h3>
//     </React.Fragment>
//   );
// };

// User.propTypes = {
//   image: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired
// };

// export default User;
