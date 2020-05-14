import React from 'react';
import s from './Profile.module.css'
import userPhoto from '../../../assets/images/123.png'
import ProfileStatus from './../ProfileStatus/ProfileStatus';
const Profile = (props) => {


    return <div className={s.wrapper}>
        <div className={s.photo}>
            
            <img alt="" src={props.user.photos.large === null ? userPhoto : props.user.photos.large} />
        </div>
        <div className={s.info}>
            <h1>Name: {props.user.fullName}</h1>
            
            <p>AboutMe:<ProfileStatus status={props.user.status}/></p>
            <p>Facebook: {props.user.contacts.facebook}</p>
            <p>Instagram: {props.user.contacts.instagram}</p>
        </div>
    </div>
}
export default Profile;