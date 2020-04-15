
import { combineReducers } from 'redux';
import CommonReducer from './common-reducer';
import ProfileReducer from './Profile-reducer';
import DialogsReducer from './Dialogs-reducer';



let reducers = combineReducers({
    common: CommonReducer,
    ProfilePage: ProfileReducer,
    DialogePage: DialogsReducer
})
export default reducers