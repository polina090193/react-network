import * as React from 'react';
import MessageCss from './Message.module.css'

const Message = (props) => (
  <div className={MessageCss.message}>
    <time className={MessageCss.time}>{ props.time }</time>
    <div className={MessageCss.from}>{ props.from }</div>
    <div>{ props.message }</div>
  </div>
);

export default Message