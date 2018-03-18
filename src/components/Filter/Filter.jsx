import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import './style.css';

class Filter extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    accepted: PropTypes.string.isRequired,
    closed: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    const { order, sort, accepted, closed } = this.props;
    this.state = {
      order,
      sort,
      accepted,
      closed
    };
  }

  componentWillReceiveProps(nextProps) {
    const { order, sort, accepted, closed } = this.props;
    if (
      nextProps.order !== order &&
      nextProps.sort !== sort &&
      nextProps.accepted !== accepted &&
      nextProps.closed !== closed
    ) {
      this.setState({
        order: nextProps.order,
        sort: nextProps.order,
        accepted: nextProps.order,
        closed: nextProps.order
      });
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = () => {
    const { search } = this.props;
    const { order, sort, accepted, closed } = this.state;
    search(
      Map({
        order,
        sort,
        accepted,
        closed
      })
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form-inline">
            <div className="form-group">
              <div className="form-group">
                Дата:
                <select
                  name="order"
                  value={this.state.order}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="desc">По убыванию</option>
                  <option value="asc">По возрастанию</option>
                </select>
              </div>
              <div className="form-group">
                Сортировать по:
                <select
                  name="sort"
                  value={this.state.sort}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="activity">Активности</option>
                  <option value="votes">Голосам</option>
                  <option value="creation">Дата создания</option>
                  <option value="relevance">Актуальность</option>
                </select>
              </div>
              <div className="form-group">
                Есть принятый ответ:
                <select
                  name="accepted"
                  value={this.state.accepted}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="">Не важно</option>
                  <option value="True">Да</option>
                  <option value="False">Нет</option>
                </select>
              </div>
              <div className="form-group">
                Вопрос закрыт
                <select
                  name="closed"
                  value={this.state.closed}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="">Не важно</option>
                  <option value="True">Да</option>
                  <option value="False">Нет</option>
                </select>
              </div>
            </div>
            <button onClick={this.handleSubmit} className="btn btn-primary">
              Отфильтровать
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
