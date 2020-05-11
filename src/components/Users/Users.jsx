import React from 'react';
import userPhoto from '../../assets/images/123.png'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    
    let pagesCount = Math.ceil(props.urlPage.totalUsersCount / props.urlPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {
                pages.map(p => {

                    return <span onClick={() => props.updatePage(p)} className={props.urlPage.countPage === p ? s.selectedPage : ""}>{p + " "}</span>
                })

            }
        </div>
        {props.users.map(u => <div key={u.id}>
            <div className={s.item}>
                <div className={s.imgFoll}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto} alt='' />
                    </NavLink>
                    {props.isAuth ? 
                    u.followed === false ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.follow(u.id)}>Follow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.unfollow(u.id)} >Unfollow</button>
                        : ''}

                </div>

                <div className={s.infoBox}>
                    <div className={s.fullName}>{u.name}</div>
                    <div className={s.status}>{u.status}</div>

                    <div className={s.country}>{u.id}</div>
                    <div className={s.city}>{"u.location.city"}</div>
                </div>
            </div>
        </div>)}
    </div>
}
export default Users