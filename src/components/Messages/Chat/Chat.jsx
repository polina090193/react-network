import * as React from 'react';
import ChatCss from './Chat.module.css'
import Message from './Message/Message';

const messages = [
  { id: '1', from: 'John', time: '12:00', message: 'Hello world' },
  { id: '2', from: 'You', time: '12:01', message: 'Hi' },
  { id: '3', from: 'John', time: '12:02', message: 'How are you?' },
]

const Chat = () => (
  <div className={ChatCss.chat}>
    { messages.map(message => <Message key={message.id} time={message.time} message={message.message} from={message.from} />)}
  </div>
);

export default Chat