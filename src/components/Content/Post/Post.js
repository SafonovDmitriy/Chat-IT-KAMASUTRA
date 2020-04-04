import React from 'react';
import s from './Post.module.css'
import { FaRegThumbsUp } from 'react-icons/fa';
const Post = (props) => {
    let liker = false;
    let funcLike = () => {
        
        props.LikeforPost(props.Posts.id)
        


    }
    return <div className={s.wrapper}>

        <img className={s.avatar} alt="" src={props.ProfilePage.ProfileDate[props.Posts.autor].avatar} />
        <p className={s.post}> {props.Posts.post} </p>
        <div className={s.buttonlike}>
            <FaRegThumbsUp className={liker === true ? s.ico : ''} onClick={funcLike} />
        </div>


        <p className={s.countLike}> Count Like:{props.Posts.likes.length} </p>
    </div>
}
export default Post;