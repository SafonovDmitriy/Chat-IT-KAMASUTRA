import React from 'react';
import s from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';


const MessageList = (props) => {
  
    
    let setMessageList=props.arrMessage.map(item=><MessageItem message={item.message}/>)
    return <div className={s.wrapper}>
      {setMessageList}
    </div>
}
export default MessageList;