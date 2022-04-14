import * as React from 'react';
import ChatCss from './Chat.module.css'
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';


const Chat = (props) => {

  const messagesElements = props.messages.map(message => (
    <Message 
      key={message.id}
      time={message.time}
      message={message.message}
      from={message.from} />)
  )

  return (
  <div className={ChatCss.chat}>
    {messagesElements}
    <SendMessage 
      state={props.state}
      newMessageBody={props.state.messagesPage.newMessageBody}
    />
  </div>
  )
}
//state={props.state} newPostText={props.state.profilePage.newPostText}
export default Chat