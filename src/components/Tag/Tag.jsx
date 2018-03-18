import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

class Tag extends React.Component {
  componentDidMount() {
    //запрос данных по этому тэгу 
  };

  render() {
    return (
      <div className="tag">
        <span>Tag:{this.props.match.params.tag}</span>
      </div>
    );
  }
}


Tag.propTypes = {
  //name: PropTypes.string.isRequired
};

export default Tag;
