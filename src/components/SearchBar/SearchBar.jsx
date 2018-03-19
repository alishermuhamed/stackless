import React from 'react';
import { Map } from 'immutable';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TextBox } from '../index';
import './style.css';

class SearchBar extends React.Component {
  static propTypes = {
    searchValue: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    const { searchValue } = this.props;
    this.state = {
      searchValue
    };
  }

  componentWillReceiveProps(nextProps) {
    const { searchValue } = this.props;
    nextProps.searchValue !== searchValue &&
      this.setState({
        searchValue: nextProps.searchValue
      });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="container-fluid">
        <NavLink className="btn btn-primary" to="/" href="/">
          Вопросы
        </NavLink>
        <TextBox
          name="searchValue"
          value={searchValue}
          onChange={this.handleChange}
          placeholder="Поиск..."
        />

        <NavLink
          className="btn btn-primary"
          to={
            searchValue ? `/search/${searchValue.split(' ').join('%20')}` : '/'
          }
          href={
            searchValue ? `/search/${searchValue.split(' ').join('%20')}` : '/'
          }
        >
          Поиск
        </NavLink>
      </div>
    );
  }
}

export default SearchBar;
