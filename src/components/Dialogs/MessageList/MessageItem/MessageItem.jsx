import React from 'react';
import s from './MessageItem.module.css'

const MessageItem = (props) => {

    return ((props.activeIDUser === props.item.sender || props.activeIDUser === props.item.recipient)
        && (props.activeDialog === props.item.sender || props.activeDialog === props.item.recipient) ?
        < div className={props.item.sender === props.activeIDUser ? s.left : s.right}>
            <div className={s.wrapper}>{props.item.message}</div>
        </div > : '')

}
export default MessageItem;