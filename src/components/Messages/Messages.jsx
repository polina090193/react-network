import Chat from './Chat/Chat'
import ContactsList from './ContactsList/ContactsList'
import MessagesCss from './Messages.module.css'

const Messages = (props) => {

  return (
    <main className={MessagesCss.main}>
      <ContactsList contacts={props.state.messagesPage.contacts} />
      <Chat
        state={props.state}
        messages={props.state.messagesPage.messages}
        className={MessagesCss.chat} 
      />
    </main>
  )
}

export default Messages