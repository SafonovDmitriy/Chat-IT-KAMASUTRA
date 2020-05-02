
import { updatePostText, addPost, likeForPost, updatePreloader } from '../../redux/Reducers/Profile-reducer';
import { connect } from 'react-redux';


import React from 'react';
import s from './Content.module.css'
import Profile from '../Profile/Profile';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import * as axios  from 'axios';
import Preloader from '../common/Preloader/Preloader';

class Content extends React.Component {
    componentDidMount(){
        updatePreloader(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/7477').then(responce=>{
            updatePreloader(false)
            console.log(responce.data)
        }
        
        )
    }
    render() {
        return this.props.preloader? <Preloader/>:<div className={s.wrapper}>
           123
            <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
            <Profile className={s.Profile}
                // user={this.responce.data}
            />
            {/* <NewPost className={s.NewPost}
                addPost={this.props.addPost}
                updatePostText={this.props.updatePostText}
            />
            <div className={s.Post}>
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
        preloader:state.ProfilePage.preloader
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPost()),
        updatePostText: (text) => dispatch(updatePostText(text)),
        likeForPost: (id) => dispatch(likeForPost(id)),
        updatePreloader:(value)=>dispatch(updatePreloader(value)) 
    }
}
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)
export default ContentContainer;