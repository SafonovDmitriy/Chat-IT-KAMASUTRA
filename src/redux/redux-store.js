
import { createStore } from 'redux';
import reducers from './Reducers/combine';
import { sub } from './Reducers/Profile-reducer';
import { sub1 } from './Reducers/Dialogs-reducer';



 let store = createStore(reducers);
sub(store);sub1(store)
export default store;