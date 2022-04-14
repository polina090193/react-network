import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "@/redux/reducers/messages-reducer";
import store from "@/redux/store";

const SendMessage = (props) => {

  const sendMessageTextarea = React.createRef()

  const sendMessage = () => {
    store.dispatch(sendMessageCreator())
  }

  const onMessageChange = () => {
    const text = sendMessageTextarea.current.value;
    console.log('text', text)
    store.dispatch(updateNewMessageBodyCreator(text))
  }


  return (
    <div>
      <textarea onChange={onMessageChange} ref={sendMessageTextarea} value={props.newMessageBody}></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default SendMessage