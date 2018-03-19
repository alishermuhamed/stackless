import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tags } from '../components';
import fetchTags from '../actions/tags';

class SideBar extends React.Component {
  static propTypes = {
    fetchTags: PropTypes.func.isRequired,
    tags: PropTypes.instanceOf(List).isRequired
  };

  componentDidMount() {
    const { fetchTags } = this.props;
    fetchTags();
  }

  render() {
    const { tags } = this.props;

    return (
      <React.Fragment>
        <Tags tags={tags} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.get('tags')
});

export default connect(mapStateToProps, { fetchTags })(SideBar);
