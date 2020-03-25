import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.wrapper}>
        <img className={s.avatar} alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BDA88601AE93419E864C1DF07158BD2617A99FA64DA36B9A8092B859D3FDD088" />
        <p className={s.post}> {props.text} </p>
        <input className={s.like} type="button" value="Like)"/>
    </div>
}
export default Post;