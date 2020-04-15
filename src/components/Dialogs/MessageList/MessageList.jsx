import React from 'react';
import s from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';


const MessageList = (props) => {
  return <div className={s.wrapper}>
    {props.arrMessage.map((item) => <MessageItem
       activeDialog={props.activeDialog}
       activeIDUser={props.activeIDUser}
      item={item}
    />)}
  </div>
}
export default MessageList;