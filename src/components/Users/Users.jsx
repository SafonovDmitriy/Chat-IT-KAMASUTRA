import React from 'react';
import s from './Users.module.css'
import Axios from 'axios';
import userPhoto from "../../assets/images/123.png"


class Users extends React.Component {
    componentDidMount() {
        console.log("Hi")
        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log("i'm here")
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
                <div className={s.item}>
                    <div className={s.imgFoll}>
                        <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto} alt='' />

                        {u.followed === false ?
                            <button onClick={() => this.props.follow(u.id)}>Follow</button> :
                            <button onClick={() => this.props.unfollow(u.id)} >Unfollow</button>}
                    </div>

                    <div className={s.infoBox}>
                        <div className={s.fullName}>{u.name}</div>
                        <div className={s.status}>{"u.status"}</div>

                        <div className={s.country}>{"u.location.country"},</div>
                        <div className={s.city}>{"u.location.city"}</div>
                    </div>
                </div>
            </div>)}
        </div>
    }
}




export default Users