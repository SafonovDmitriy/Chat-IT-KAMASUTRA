import React from 'react';
import s from './Users.module.css'
import Axios from 'axios';
import userPhoto from "../../assets/images/123.png"


class Users extends React.Component {
    get(p = this.props.urlPage.page) {
        this.props.updatePage(p);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.urlPage.pageSize}`).then(response => {
            this.props.updateTotalCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })
    }
    componentDidMount() {
        this.get()
    }

    render() {

        let pagesCount = Math.ceil(this.props.urlPage.totalUsersCount / this.props.urlPage.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(p => {

                        return <span onClick={() => this.get(p)} className={this.props.urlPage.page === p ? s.selectedPage : ""}>{p + " "}</span>
                    })

                }
            </div>
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