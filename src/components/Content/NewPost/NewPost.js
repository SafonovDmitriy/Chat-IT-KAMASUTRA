import React from 'react';
import s from './NewPost.module.css'
import { TextBox, StyllButton } from '../../inputs/inputs';
const NewPost = () => {
    return <div className={s.wrapper}>
        <h1 className="Title">My posts</h1>
       <div> <TextBox value="Text"/>
        <StyllButton value="Sand massage"/></div>
    </div>
}
export default NewPost;