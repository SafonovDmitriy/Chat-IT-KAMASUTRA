
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { addPost, getUserDate, likeForPost, setStatusUser, updatePostText } from '../../redux/Reducers/Profile-reducer';
// import NewPost from './NewPost/NewPost';
// import Post from './Post/Post';
import Preloader from '../common/Preloader/Preloader';
import { selectUser } from './../../redux/Reducers/Profile-reducer';
import s from './Content.module.css';
import Profile from "./Profile/Profile";











const Content = React.memo(({ match: { params: { userId } }, getUserDate, ...props }) => {
    console.log("Render")



    useEffect(() => {
        getUserDate(userId)
    }, [userId, getUserDate])



    return props.preloader ? <Preloader /> :
        <>
            <div className={s.wrapper}>
                {/* <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" /> */}
                <Profile className={s.Profile}
                    user={props.selUser}
                    activeIDUser={props.activeIDUser}
                    status={props.status}
                    setStatusUser={(status) => props.setStatusUser(status)}
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


})

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
        getUserDate: (match) => dispatch(getUserDate(match)),
        setStatusUser: (status) => dispatch(setStatusUser(status))


    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter

)(Content);