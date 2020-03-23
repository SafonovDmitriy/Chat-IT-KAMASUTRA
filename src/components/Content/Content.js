import React from 'react';
import './Content.css'
import Profile from './Profile/Profile';
import NewPost from './NewPost/NewPost';
const Content = () => {
    return <div className="content-wrapper">
        <img className="back" alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
        <Profile className="Profile" />
        <NewPost className="NewPost" />
    </div>
}
export default Content;