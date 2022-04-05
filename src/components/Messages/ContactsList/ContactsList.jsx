import * as React from 'react';
import styleConsts from '@/styles/styleConsts';
import MenuButton from '@c/MenuButton/MenuButton'

const ContactsList = (props) => {

  const contactsElements = props.contacts.map(contact => <MenuButton key={contact.id} link={contact.id} title={contact.name} />)

  return (<nav style={{ width: styleConsts.menuWidth }}>
    {contactsElements}
  </nav>
  )
}

export default ContactsList