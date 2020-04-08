import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';


export let rerenderTree = () => {
    ReactDOM.render(<App

        state={store.getState()}
        addPost={store.addPost.bind(store)}
        SendMessages={store.SendMessages.bind(store)}
        SaveActiveDialog={store.SaveActiveDialog.bind(store)}
        LikeforPost={store.LikeforPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
    />, document.getElementById('root'));
}
rerenderTree();
store.subscribe(rerenderTree);

serviceWorker.unregister();
