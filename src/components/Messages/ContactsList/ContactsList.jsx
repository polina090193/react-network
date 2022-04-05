import * as React from 'react';
import styleConsts from '@/styles/styleConsts';
import Contact from './Contact/Contact';

const contacts = [
  { id: '44', name: 'John' },
  { id: '88', name: 'Linda' },
]

const contactsElements = contacts.map(contact => <Contact key={contact.id} link={contact.id} title={contact.name} />)

const ContactsList = () => (
  <nav style={{width: styleConsts.menuWidth}}>
    { contactsElements }
  </nav>
);

export default ContactsList