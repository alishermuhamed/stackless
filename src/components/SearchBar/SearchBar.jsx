import React from 'react';
import { Map } from 'immutable';
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
    onSubmit(
      Map({
        q: search
      })
    );
    this.setState({ search: undefined });
  };

  handleHome = () => {
    const { onSubmit } = this.props;
    onSubmit(
      Map({
        q: ''
      })
    );
    this.setState({ search: undefined });
  };

  render() {
    const { search } = this.state;

    return (
      <div className="container-fluid">
        <button className="btn btn__hov">
          <NavLink onClick={this.handleHome} className="btn__a" to="/" href="/">
            Вопросы
          </NavLink>
        </button>
        <TextBox
          name="search"
          value={search}
          onChange={this.handleChange}
          placeholder="Поиск..."
        />
        <button className="btn btn__hov">
          <NavLink onClick={this.handleSearch} className="btn__a" to="/" href="/">
            Поиск
          </NavLink>
        </button>
      </div>
    );
  }
}

export default SearchBar;
