import * as React from 'react';
import ChatCss from './Chat.module.css'
import Message from './Message/Message';


const Chat = (props) => {

  const messagesElements = props.messages.map(message => (
    <Message 
      key={message.id}
      time={message.time}
      message={message.message}
      from={message.from} />)
  )

  return (<div className={ChatCss.chat}>
    {messagesElements}
  </div>
  )
}

export default Chat