import React from 'react';
import s from './NewPost.module.css'
import { TextBox, StyllButton } from '../../inputs/inputs';
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/state';




const NewPost = (props) => {

    let newPostElement = React.createRef()
    let sendPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = ""
    }
    return <div className={s.wrapper}>
        <h1 className={s.Title}>My posts</h1>
        <div>
            <TextBox className={s.TextBox}
                placeholder="Text Post"
                value={props.NewPostText}
                refs={newPostElement}
                onChange={() => props.dispatch(updatePostTextActionCreator(newPostElement.current.value))}
            />
            <div className={s.SendPost}>
                <StyllButton className={s.sendMessage}
                    value="Send Post"
                    onClick={sendPost}
                />
            </div>
        </div>
    </div>
}
export default NewPost;