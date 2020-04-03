import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { addPost } from './redux/state';


export let rerenderTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost} />, document.getElementById('root'));
}
rerenderTree();

serviceWorker.unregister();
