import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return <div className={s.wrapper}>
        <div className={s.photo}> <img alt="" src="https://i.mycdn.me/i?r=A4CR_9dgEMthBxFY0W6Al3xC9TJP4EcSJih9n8pxqyRpLrvhV5SVglBxKL7Ydyec3HjCuK7PtzS90vS4RLT7YwGfk-5NTdSspqIvEmCdTMPkts4C8pUwWiVyT9F2kC9iTwAwuCeMb6ABmoa9-HrsY35MrGlVgRUtOqid2G13X9oagCfXyVIJfEGo-kDFW-DILp-R" />
        </div>
        <div className={s.info}>
            <h1>Dmitriy S.</h1>
            <p>Date of Birth: 2 january</p>
            <p>City:Minsk</p>
            <p>Education: BSU `11</p>
            <p>Web Site:</p>
        </div>
    </div>
}
export default Profile;