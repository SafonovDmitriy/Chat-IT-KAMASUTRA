
import { createStore } from 'redux';
import reducers from './Reducers/combine';
import { sub } from './Reducers/Profile-reducer';
import { sub1 } from './Reducers/Dialogs-reducer';




let store = createStore(reducers);
let common = store.getState().common;
window.store=store.getState();
sub(common);
sub1(common);
export default store;