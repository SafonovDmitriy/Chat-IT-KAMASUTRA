import React from 'react';
import s from './MessageItem.module.css'

const MessageItem = (props) => {

    return ((props.state.activeIDUser === props.item.sender || props.state.activeIDUser === props.item.recipient)
        && (props.state.activeDialog === props.item.sender || props.state.activeDialog === props.item.recipient) ?
        < div className={props.item.sender === props.state.activeIDUser ? s.left : s.right}>
            <div className={s.wrapper}>{props.item.message}</div>
        </div > : '')

}
export default MessageItem;