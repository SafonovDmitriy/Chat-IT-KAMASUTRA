import React from 'react';
import Content from './Content';
import { updatePostTextActionCreator, addPostActionCreator, likeForPostActiveCreator } from '../../redux/Reducers/Profile-reducer';



const ContentContainer = (props) => {
    let addPostAction = () => {
        props.dispatch(addPostActionCreator())
    }
    let updatePostTextAction = (text) => {
        props.dispatch(updatePostTextActionCreator(text))
    }
    let likeForPostActive = (id) => {
        props.dispatch(likeForPostActiveCreator(id));
    }
    return <Content
        ProfileDate={props.ProfileDate}
        arrPost={props.arrPost}
        addPostActionCreator={addPostAction}
        updatePostTextActionCreator={updatePostTextAction}
        likeForPostActiveCreator={likeForPostActive} />



}
export default ContentContainer;