import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return <div className={s.wrapper}>

        <img className={s.avatar} alt="" src={props.ProfilePage.ProfileDate[props.arrPost.autor].avatar} />
        <p className={s.post}> {props.arrPost.post} </p>
        <input className={s.buttonlike} type="button" value="Like)" />
        <p className={s.countLike}> Count Like: {props.arrPost.like}</p>
    </div>
}
export default Post;