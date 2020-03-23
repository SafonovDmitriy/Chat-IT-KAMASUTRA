import React from 'react';
import './NewPost.css'
import { TextBox, StyllButton } from '../../inputs/inputs';
const NewPost = () => {
    return <div className="NewPost-wrapper">
        <h1 className="Title">My posts</h1>
        <TextBox />
        <StyllButton />
    </div>
}
export default NewPost;