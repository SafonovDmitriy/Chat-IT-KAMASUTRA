
import { combineReducers } from 'redux';
import CommonReducer from './common-reducer';
import ProfileReducer from './Profile-reducer';
import DialogsReducer from './Dialogs-reducer';
import SideBarReducer from './SideBar-reducer';
import UsersReducer from './Users-reducer';



let reducers = combineReducers({
    common: CommonReducer,
    ProfilePage: ProfileReducer,
    DialogePage: DialogsReducer,
    sideBar: SideBarReducer,
    usersPage:UsersReducer
})

export default reducers