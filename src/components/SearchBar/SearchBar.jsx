import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TextBox } from '../index';
import './style.css';

class SearchBar extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    search: undefined
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSearch = () => {
    const { onSubmit } = this.props;
    const { search } = this.state;
    onSubmit(search);
    this.setState({ search: undefined });
  };

  handleHome = () => {
    const { onSubmit } = this.props;
    onSubmit('');
    this.setState({ search: undefined });
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <NavLink onClick={this.handleHome} className="button" to="/" href="/">
          Вопросы
        </NavLink>
        <TextBox
          name="search"
          value={search}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <NavLink onClick={this.handleSearch} className="button" to="/" href="/">
          Search
        </NavLink>
      </div>
    );
  }
}

export default SearchBar;
