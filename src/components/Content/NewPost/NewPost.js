import React from 'react';
import s from './NewPost.module.css'
import { TextBox, StyllButton } from '../../inputs/inputs';
const NewPost = (props) => {

    let newPostElement = React.createRef()

    let addPosts = () => {
        let text = newPostElement.current.value
        props.addPost(text);
        newPostElement.current.value = "";
    }

    return <div className={s.wrapper}>
        <h1 className="Title">My posts</h1>
        <TextBox value="Text" refs={newPostElement} />
        <StyllButton value="Sand massage" onClick={addPosts} />
    </div>
}
export default NewPost;