import React from 'react';
import { SideBar, SearchBar } from '../containers';

class Background extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <SearchBar />
        <SideBar />
      </div>
    );
  }
}

export default Background;
