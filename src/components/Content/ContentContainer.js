
import { updatePostText, addPost, likeForPost, updatePreloader } from '../../redux/Reducers/Profile-reducer';
import { connect } from 'react-redux';


import React from 'react';
import s from './Content.module.css'
import Profile from '../Profile/Profile';
// import NewPost from './NewPost/NewPost';
// import Post from './Post/Post';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { selectUser } from './../../redux/Reducers/Profile-reducer';

class Content extends React.Component {
    componentDidMount() {
        updatePreloader(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(responce => {

            this.props.selectUser({ ...responce.data, ...responce.data.contacts, ...responce.data.photos })
            console.log(this.props.selUser)
            updatePreloader(false)
        }

        )
    }
    render() {
        return this.props.preloader === true ? <Preloader /> : <div className={s.wrapper}>
            <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
            <Profile className={s.Profile}
                user={this.props.selUser}
            />

            {/* <NewPost className={s.NewPost}
                addPost={this.props.addPost}
                updatePostText={this.props.updatePostText}
            /> */}
            {/* <div className={s.Post}>
                {this.props.arrPost.map(posts => <Post
                    posts={posts}
                    ProfileDate={this.props.ProfileDate}
                    likeForPost={this.props.likeForPost}
                />)
                }

            </div> */}
        </div>
    }

}

let mapStateToProps = (state) => {
    return {
        ProfileDate: state.common.ProfileDate,
        arrPost: state.ProfilePage.arrPost,
        activeIDUser: state.common.activeIDUser,
        preloader: state.ProfilePage.preloader,
        selUser: state.ProfilePage.selectUser
    }
}

const ContentContainer = connect(mapStateToProps, {
    addPost,
    updatePostText,
    likeForPost,
    updatePreloader,
    selectUser
})(Content)
export default ContentContainer;