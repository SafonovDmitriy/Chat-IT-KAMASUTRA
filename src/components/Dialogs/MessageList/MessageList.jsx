import React from 'react';
import s from './MessageList.module.css'
import MessageItem from './MessageItem/MessageItem';

const MessageList = (props) => {
    return <div className={s.wrapper}>
       <MessageItem message="How"/>
       <MessageItem message="are"/>
       <MessageItem message="You"/>
       <MessageItem message="?"/>
    </div>
}
export default MessageList;