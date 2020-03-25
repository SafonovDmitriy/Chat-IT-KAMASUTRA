import React from 'react';
import s from './Content.module.css'
import Profile from './Profile/Profile';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
const Content = () => {
    return <div className={s.wrapper}>
        <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
        <Profile className={s.Profile} />
        <NewPost className={s.NewPost} />
        <Post className={s.Post} text="Test TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest TextTest Text" /><Post /><Post />
    </div>
}
export default Content;