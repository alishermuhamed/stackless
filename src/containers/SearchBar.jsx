import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar as SearchBarComponent } from '../components';
import search from '../actions/sortParams';

const SearchBar = ({ search }) => {
  return (
    <React.Fragment>
      <SearchBarComponent onSubmit={search} />
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};
export default connect(null, { search })(SearchBar);
