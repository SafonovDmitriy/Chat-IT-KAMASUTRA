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
        <h1 className={s.Title}>My posts</h1>
        <div>
            <TextBox className={s.TextBox} value="Text" refs={newPostElement} />
            <div className={s.SendPost}>
                <StyllButton className={s.sendMessage} value="Send Post" onClick={addPosts} />
            </div>
        </div>
    </div>
}
export default NewPost;