import React from 'react';
import s from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';


const MessageList = (props) => {


  let setMessageList = props.state.DialogePage.arrMessage.map(item => <MessageItem
    state={props.state}
    item={item}
  />)
  return <div className={s.wrapper}>
    {setMessageList}
  </div>
}
export default MessageList;