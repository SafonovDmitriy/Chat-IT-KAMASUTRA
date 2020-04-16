import SideBar from './SideBar.jsx';
import { updateUrlActive } from '../../redux/Reducers/SideBar-reducer.js';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {

  return {
    activeDialog: state.activeDialog,
    sideBar: state.sideBar.sideBarMenu
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateUrlActive: () => dispatch(updateUrlActive())
  }
}
const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarContainer