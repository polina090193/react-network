import Chat from './Chat/Chat'
import ContactsList from './ContactsList/ContactsList'
import MessagesCss from './Messages.module.css'

const Messages = () => {
  return (
    <main className={MessagesCss.main}>
      <ContactsList />
      <Chat className={MessagesCss.chat} />
    </main>
  )
}

export default Messages