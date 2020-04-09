import React from 'react';
import s from './MessageItem.module.css'

const MessageItem = (props) => {
let state=props.state.common
    return ((state.activeIDUser === props.item.sender || state.activeIDUser === props.item.recipient)
        && (state.activeDialog === props.item.sender || state.activeDialog === props.item.recipient) ?
        < div className={props.item.sender === state.activeIDUser ? s.left : s.right}>
            <div className={s.wrapper}>{props.item.message}</div>
        </div > : '')

}
export default MessageItem;