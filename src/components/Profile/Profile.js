import React from 'react';
import s from './Profile.module.css'
const Profile = (props) => {
    let id = 0
    return <div className={s.wrapper}>
        <div className={s.photo}> <img alt="" src={props.ProfileDate[id].avatar} />
        </div>
        <div className={s.info}>

            <h1>Name: {props.ProfileDate[id].user}</h1>
            <p>Date of Birth: {props.ProfileDate[id].dateOfBirth}</p>
            <p>City: {props.ProfileDate[id].city}</p>
            <p>Web Site: <a href={props.ProfileDate[id].website}>{props.ProfileDate[id].website}</a></p>
        </div>
    </div>
}
export default Profile;