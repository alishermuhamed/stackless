import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextBox } from '..';
import './style.css';

class SearchBar extends React.PureComponent {
  state = {
    search: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <NavLink className="button" to="/" href="/">
          Вопросы
        </NavLink>
        <TextBox
          name="search"
          value={search}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <NavLink
          className="button"
          to={`/search/q=${search}`}
          href={`/search/q=${search}`}
        >
          Search
        </NavLink>
      </div>
    );
  }
}

export default SearchBar;
