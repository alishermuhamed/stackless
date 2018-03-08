import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextBox } from '../components';

class NavigationBar extends React.PureComponent {
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
        <NavLink to="/" href="/">
          Вопросы
        </NavLink>
        <TextBox
          name="search"
          value={search}
          onChange={this.handleChange}
          placeholder="Поиск..."
        />
        <NavLink to={`/search/q=${search}`} href={`/search/q=${search}`}>
          Поиск
        </NavLink>
      </div>
    );
  }
}

export default NavigationBar;
