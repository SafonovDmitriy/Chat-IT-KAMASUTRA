import React from 'react';
import s from './Post.module.css'
import { FaRegThumbsUp } from 'react-icons/fa';

const Post = (props) => {
    let liker = false;
    return <div className={s.wrapper}>

        <img className={s.avatar} alt="" src={props.ProfileDate[props.posts.autor].avatar} />
        <p className={s.post}> {props.posts.post} </p>
        <div className={s.buttonlike}>
            <FaRegThumbsUp className={liker === true ? s.ico : ''} onClick={()=>props.likeForPostActiveCreator(props.posts.id)
            } />
        </div>


        <p className={s.countLike}> Count Like:{props.posts.likes.length} </p>
    </div>
}
export default Post;