import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import './style.css';

class Filter extends React.Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    answers: PropTypes.string.isRequired,
    accepted: PropTypes.string.isRequired,
    closed: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    const { answers, accepted, closed } = this.props;
    this.state = {
      answers,
      accepted,
      closed
    };
  }

  componentWillReceiveProps(nextProps) {
    const { answers, accepted, closed } = this.props;
    if (
      nextProps.answers !== answers &&
      nextProps.accepted !== accepted &&
      nextProps.closed !== closed
    ) {
      this.setState({
        answers: nextProps.answers,
        accepted: nextProps.accepted,
        closed: nextProps.closed
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
    const { answers, accepted, closed } = this.state;
    search(
      Map({
        answers,
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
                Минимальное кол-во ответов:
                <input
                  min='0'
                  max='1000'
                  name="answers"
                  value={this.state.answers}
                  onChange={this.handleChange}
                  type="number"
                  className="form-control"
                />
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
                Вопрос закрыт:
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
