import React from 'react';
import s from './Profile.module.css'
const Profile = (props) => {
   
  
    return <div className={s.wrapper}>
        {/* <div className={s.photo}> <img alt="" src={props.ProfileDate[props.id].avatar} />
        </div>
        <div className={s.info}>

            <h1>Name: {props.ProfileDate[props.id].user}</h1>
            <p>Date of Birth: {props.ProfileDate[props.id].dateOfBirth}</p>
            <p>City: {props.ProfileDate[props.id].city}</p>
            <p>Web Site: <a href={props.ProfileDate[props.id].website}>{props.ProfileDate[props.id].website}</a></p>
        </div> */}
    </div>
}
export default Profile;