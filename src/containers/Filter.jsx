import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter as FilterComponent } from '../components';
import { updateFilterParams } from '../actions/questions';
import { getAccepted, getClosed, getAnswers } from '../selectors/questions';

const Filter = props => {
  return (
    <React.Fragment>
      <FilterComponent {...props} />
    </React.Fragment>
  );
};

Filter.propTypes = {
  updateFilterParams: PropTypes.func.isRequired,
  answers: PropTypes.string.isRequired,
  accepted: PropTypes.string.isRequired,
  closed: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  answers: getAnswers(state),
  accepted: getAccepted(state),
  closed: getClosed(state)
});

export default connect(mapStateToProps, { updateFilterParams })(Filter);
