import SideBar from './SideBar.jsx';
import { updateUrlActive } from '../../redux/Reducers/SideBar-reducer.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';




let mapStateToProps = (state) => {

  return {
    activeDialog: state.auth.activeDialog,
    sideBar: state.sideBar.sideBarMenu,
    activeIDUser:state.auth.activeIDUser
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateUrlActive: (url) => dispatch(updateUrlActive(url))
  }
}
let withUrlData = withRouter(SideBar)
const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlData)
export default SideBarContainer