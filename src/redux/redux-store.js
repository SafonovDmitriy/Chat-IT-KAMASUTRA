
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers/combine';
import { sub1 } from './Reducers/Dialogs-reducer';
import thunkMiddleware from 'redux-thunk';




let store = createStore(reducers, applyMiddleware(thunkMiddleware));

let common = store.getState().common;
window.store = store;
sub1(common);

export default store;