import React from 'react';
import s from './Content.module.css'
import Profile from '../Profile/Profile';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const Content = (props) => {


    return <div className={s.wrapper}>
        <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
        <Profile className={s.Profile}
            ProfileDate={props.ProfileDate}
        />
        <NewPost className={s.NewPost}
            addPostActionCreator={props.addPostActionCreator}
            updatePostTextActionCreator={props.updatePostTextActionCreator}
        />
        <div className={s.Post}>
            {props.arrPost.map(posts => <Post
                posts={posts}
                ProfileDate={props.ProfileDate}
                likeForPostActiveCreator={props.likeForPostActiveCreator}
            />)
            }

        </div>
    </div>
}
export default Content;