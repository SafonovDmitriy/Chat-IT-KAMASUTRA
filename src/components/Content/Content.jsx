import React from 'react';
import s from './Content.module.css'
import Profile from '../Profile/Profile';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const Content = (props) => {

    let SetArrPost = props.ProfilePage.arrPost.map(Posts => <Post Posts={Posts} ProfilePage={props.ProfilePage} activeIDUser={props.activeIDUser} LikeforPost={props.LikeforPost} />)
    return <div className={s.wrapper}>
        <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
        <Profile className={s.Profile} ProfileDate={props.ProfilePage.ProfileDate} />
        <NewPost className={s.NewPost} updatePostText={props.updatePostText} activeIDUser={props.activeIDUser} addPost={props.addPost} NewPostText={props.NewPostText}/>
        <div className={s.Post}>
            {SetArrPost}

        </div>
    </div>
}
export default Content;