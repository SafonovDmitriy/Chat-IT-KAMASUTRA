import React from 'react';
import s from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';


const MessageList = (props) => {

  return <div className={s.wrapper}>
    {props.state.DialogePage.arrMessage.map((item) => <MessageItem
      state={props.state}
      item={item}
    />)}
  </div>
}
export default MessageList;