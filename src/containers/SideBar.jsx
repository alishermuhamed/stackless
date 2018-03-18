import React from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import fetchTags from '../actions/tags';
import { Link } from 'react-router-dom';
//import { QuestionsList } from '../components';
import { getErrorMessage, getIsFetching, getTags } from '../selectors/tags';
import './style.css';

class Sidebar extends React.Component {
  static propTypes = {
    fetchTags: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    //sortParams: PropTypes.instanceOf(Map),
    tags: PropTypes.instanceOf(List)
  };

  static defaultProps = {
    error: undefined,
    //sortParams: Map(),
    tags: List()
  };

  componentDidMount() {
    const { fetchTags } = this.props;
    fetchTags();
  }

  /* componentWillReceiveProps(nextProps) {
    const { fetchTags, sortParams } = this.props;
    nextProps.sortParams !== sortParams && fetchTags(nextProps.sortParams);
  } */

  renderTagsList = () => {
    return this.props.tags.map(tag => {
      const name = tag.get('name');
      return (
        <div key={name}>
          <Link to={`/tags/${encodeURIComponent(name)}`}>{name}</Link>;
        </div>
      )
    });
  };

  render() {
    return <div className = "sideBarBox">{this.renderTagsList()}</div>;
  }
}

/* const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state),
    error: getErrorMessage(state),
    sortParams: getSortParams(state),
    questions: getQuestions(state)
  } 
}; */

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  error: getErrorMessage(state),
  tags: getTags(state)
});

export default connect(mapStateToProps, { fetchTags })(Sidebar);
