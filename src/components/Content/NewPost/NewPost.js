import React from 'react';
import s from './NewPost.module.css'
import { TextBox, StyllButton } from '../../inputs/inputs';
const NewPost = (props) => {

    let newPostElement = React.createRef()

    return <div className={s.wrapper}>
        <h1 className={s.Title}>My posts</h1>
        <div>
            <TextBox className={s.TextBox} placeholder="Text" value={props.NewPostText} refs={newPostElement} onChange={()=>props.updatePostText(newPostElement.current.value)} />
            <div className={s.SendPost}>
                <StyllButton className={s.sendMessage} value="Send Post" onClick={props.addPost} />
            </div>
        </div>
    </div>
}
export default NewPost;