import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter as FilterComponent } from '../components';
import search from '../actions/sortParams';
import {
  getAccepted,
  getClosed,
  getOrder,
  getSort
} from '../selectors/questions';

const Filter = props => {
  return (
    <React.Fragment>
      <FilterComponent {...props} />
    </React.Fragment>
  );
};

Filter.propTypes = {
  search: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  accepted: PropTypes.string.isRequired,
  closed: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  order: getOrder(state),
  sort: getSort(state),
  accepted: getAccepted(state),
  closed: getClosed(state)
});

export default connect(mapStateToProps, { search })(Filter);
