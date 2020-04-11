import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';


export let rerenderTree = (state) => {

    ReactDOM.render(<App
        state={state}
        dispatch={store.dispatch.bind(store)}
    />, document.getElementById('root'));
}
rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
});

serviceWorker.unregister();
