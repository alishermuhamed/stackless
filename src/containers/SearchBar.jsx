import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar as SearchBarComponent } from '../components';
import { getSearch } from '../selectors/questions';

const SearchBar = ({ searchValue }) => {
  return (
    <React.Fragment>
      <SearchBarComponent searchValue={searchValue} />
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  searchValue: getSearch(state)
});

export default connect(mapStateToProps)(SearchBar);
