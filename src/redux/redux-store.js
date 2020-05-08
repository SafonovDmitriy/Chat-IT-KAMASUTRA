
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/combine';
import { sub } from './Reducers/Profile-reducer';
import { sub1 } from './Reducers/Dialogs-reducer';
// import { sub2 } from './Reducers/SideBar-reducer';
import thunkMiddleware from 'redux-thunk';




let store = createStore(reducers, applyMiddleware(thunkMiddleware));

let common = store.getState().common;
window.store = store;
sub(common);
sub1(common);
// sub2(common);
export default store;