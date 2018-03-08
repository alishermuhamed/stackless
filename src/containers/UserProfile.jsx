import PropTypes from 'prop-types';

const User = ({ match }) => match.params.id;
User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
export default User;
