import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


export let rerenderTree = (state) => {

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </Provider>
        , document.getElementById('root'));
}
rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
});

serviceWorker.unregister();
