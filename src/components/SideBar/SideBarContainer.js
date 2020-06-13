import SideBar from './SideBar.jsx';
import { updateUrlActive ,updateProfileURL} from '../../redux/Reducers/SideBar-reducer.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getUserDate } from '../../redux/Reducers/Profile-reducer.js';



let mapStateToProps = (state) => {

  return {
    isAuth:state.auth.isAuth,
    activeDialog: state.auth.activeDialog,
    sideBar: state.sideBar.sideBarMenu,
    activeIDUser:state.auth.activeIDUser
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateUrlActive: (url) => dispatch(updateUrlActive(url)),
    updateProfileURL:(idUser)=>dispatch(updateProfileURL(idUser)),
    getUserDate:(idUser)=>dispatch(getUserDate(idUser))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SideBar)
