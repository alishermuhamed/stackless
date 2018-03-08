import PropTypes from 'prop-types';

const Question = ({ match }) => match.params.id;
Question.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired
};
export default Question;
