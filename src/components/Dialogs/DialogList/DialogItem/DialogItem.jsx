import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

class DialogItem extends React.Component {
    render() {
        if (this.props.state.activeIDUser !== this.props.human.id) {
            return <div className={s.wrapper}>
                <NavLink
                    onClick={() => this.props.saveActiveDialogActiveCreator(this.props.human.id)}
                    className={this.props.state.activeDialog === this.props.human.id ? s.active : ""}
                    activeClassName={s.active}
                    to={"/messages/" + this.props.human.id + "/"}>
                    <li>{this.props.human.user} </li>
                </NavLink>
            </div>
        }
        return '';
    }
}
export default DialogItem;