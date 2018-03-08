import { connect } from 'react-redux';
import SideBarComponent from '../components/SideBar';

const mapStateToProps = ({ tags }) => {
  if (tags && tags.items) return tags;
  else
    return {
      isFetching: true,
      items: []
    };
};

const SideBar = connect(mapStateToProps, null)(SideBarComponent);

export default SideBar;
