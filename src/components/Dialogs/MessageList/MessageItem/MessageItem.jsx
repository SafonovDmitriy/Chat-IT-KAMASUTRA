import React from 'react';
import s from './MessageItem.module.css'

class MessageItem extends React.Component {
    render() {
        return ((this.props.activeIDUser === this.props.item.sender || this.props.activeIDUser === this.props.item.recipient)
            && (this.props.activeDialog === this.props.item.sender || this.props.activeDialog === this.props.item.recipient) ?
            < div className={this.props.item.sender === this.props.activeIDUser ? s.left : s.right}>
                <div className={s.wrapper}>{this.props.item.message}</div>
            </div > : '')
    }
}
export default MessageItem;