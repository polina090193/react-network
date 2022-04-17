import React from "react"

const SendMessage = (props) => {

  const sendMessageArea = React.createRef()

  const onSend = () => {
    props.sendMessage()
  }

  const onMessageChange = () => {
    const text = sendMessageArea.current.value;
    props.updateNewMessageBody(text)
  }


  return (
    <div>
      <textarea onChange={onMessageChange} ref={sendMessageArea} value={props.newMessageBody}></textarea>
      <button onClick={onSend}>Send</button>
    </div>
  )
}

export default SendMessage