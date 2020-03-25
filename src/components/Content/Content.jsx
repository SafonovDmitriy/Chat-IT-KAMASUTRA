import React from 'react';
import s from './Content.module.css'
import Profile from '../Profile/Profile';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
const Content = () => {
    return <div className={s.wrapper}>
        <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
        <Profile className={s.Profile} />
        <NewPost className={s.NewPost} />
        <div className={s.Post}>
            <Post message="Hi,how are you?" like={5} />
            <Post message="It`s my first post" like={6}/>

        </div>
    </div>
}
export default Content;