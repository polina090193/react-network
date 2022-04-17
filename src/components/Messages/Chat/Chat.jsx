import * as React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from "@/redux/reducers/messages-reducer"
import ChatCss from './Chat.module.css'
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';

const mapStateToProps = (state) => {
  return {
    newMessageBody: state.messagesPage.newMessageBody
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateNewMessageBody: (text) => {
          const action = updateNewMessageBodyCreator(text);
          dispatch(action);
      },
      sendMessage: () => {
        dispatch(sendMessageCreator());
      }
  }
}

const Chat = (props) => {
  const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);

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
    <SendMessageContainer />
  </div>
  )
}

export default Chat