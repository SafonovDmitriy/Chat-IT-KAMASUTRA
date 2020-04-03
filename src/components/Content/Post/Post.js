import React from 'react';
import s from './Post.module.css'
import { FaRegThumbsUp } from 'react-icons/fa';
const Post = (props) => {
    let liker = false;
    let funcLike = () => {
       if(liker === false) {
        liker = true ; 
        props.LikeforPost(props.arrPost.id,props.arrPost.like+1);

       }else{
        liker = false;
        props.LikeforPost(props.arrPost.id,props.arrPost.like-1);
       } 
       
       
    }
    return <div className={s.wrapper}>

        <img className={s.avatar} alt="" src={props.ProfilePage.ProfileDate[props.arrPost.autor].avatar} />
        <p className={s.post}> {props.arrPost.post} </p>
        <div className={s.buttonlike}>
            <FaRegThumbsUp className={liker === true ? s.ico : ''} onClick={funcLike} />
        </div>


        <p className={s.countLike}> Count Like: {props.arrPost.like}</p>
    </div>
}
export default Post;