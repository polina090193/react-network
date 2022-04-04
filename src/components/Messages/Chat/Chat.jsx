import * as React from 'react';
import ChatCss from './Chat.module.css'
import Message from './Message/Message';

const Chat = () => (
  <div className={ChatCss.chat}>
    <Message time="12:00" message="Hello world" from="John" />
    <Message time="12:01" message="Hi" from="You" />
    <Message time="12:02" message="How are you?" from="John" />
  </div>
);

export default Chat