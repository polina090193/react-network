import ChatContainer from './Chat/ChatContainer'
import ContactsListContainer from './ContactsList/ContactsListContainer'
import MessagesCss from './Messages.module.css'

const Messages = (props) => {

  return (
    <main className={MessagesCss.main}>
      <ContactsListContainer />
      <ChatContainer />
    </main>
  )
}

export default Messages