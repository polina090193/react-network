import React from "react"

const SendMessage = (props) => {

  const sendMessageTextarea = React.createRef()

  const onButtonClick = () => alert(sendMessageTextarea.current.value)

  return (
    <div>
      <textarea ref={sendMessageTextarea} name="" id="" cols="30" rows="10"></textarea>
      <button onClick={onButtonClick}>Send</button>
    </div>
  )
}

export default SendMessage