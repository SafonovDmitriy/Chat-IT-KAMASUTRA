
import { updatePostText, addPost, likeForPost, getUserDate, setStatusUser } from '../../redux/Reducers/Profile-reducer';
import { connect } from 'react-redux';


import React from 'react';
import s from './Content.module.css'
import Profile from './Profile/Profile';
// import NewPost from './NewPost/NewPost';
// import Post from './Post/Post';
import Preloader from '../common/Preloader/Preloader';
import { selectUser } from './../../redux/Reducers/Profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';






class Content extends React.Component {
    componentDidMount() {
        this.props.getUserDate(this.props.match, this.props.selUser.userId)
      
    }

    render() {
        return this.props.preloader ? <Preloader /> :
            <>
                <div className={s.wrapper}>
                    {/* <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" /> */}
                    <Profile className={s.Profile}
                        user={this.props.selUser}
                        activeIDUser={this.props.activeIDUser}
                        status={this.props.status}
                        setStatusUser={(status) => this.props.setStatusUser(status)}
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
            </>
    }

}

let mapStateToProps = (state) => {
    return {
        ProfileDate: state.common.ProfileDate,
        arrPost: state.ProfilePage.arrPost,
        activeIDUser: state.auth.activeIDUser,
        preloader: state.ProfilePage.preloader,
        selUser: state.ProfilePage.selectUser,
        status: state.ProfilePage.status


    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPost()),
        updatePostText: (text) => dispatch(updatePostText(text)),
        likeForPost: (value) => dispatch(likeForPost(value)),
        selectUser: (user) => dispatch(selectUser(user)),
        getUserDate: (match, activeIDUser) => dispatch(getUserDate(match, activeIDUser)),
        setStatusUser: (status) => dispatch(setStatusUser(status))


    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter

)(Content);