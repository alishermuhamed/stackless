import React from 'react';
import { List } from 'immutable';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const SearchBar = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => (
        <div key={tag}>
          <NavLink
            to={`/tags/${tag.split(' ').join('%20')}`}
            href={`/tags/${tag.split(' ').join('%20')}`}
          >
            {tag}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

SearchBar.propTypes = {
  tags: PropTypes.instanceOf(List).isRequired
};

export default SearchBar;
