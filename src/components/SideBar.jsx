import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchTags from '../actions/tags';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTags());
  }

  render() {
    const { isFetching, items } = this.props;
    return (
      <div>
        {isFetching && items.length === 0 && <h2>Loading...</h2>}
        {!isFetching && items.length === 0 && <h2>Empty.</h2>}
        {items.length > 0 && (
          <div>
            {items.map(i => (
              <div key={i}>
                <Link to={`/${i}`} href={`/${i}`}>
                  {i}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

SideBar.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default SideBar;
