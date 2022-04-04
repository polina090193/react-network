import * as React from 'react';
import MenuButton from '../../MenuButton/MenuButton'
import styleConsts from '../../../styles/styleConsts';

const contacts = [
  { id: '44', name: 'John' },
  { id: '88', name: 'Linda' },
]

const ContactsList = () => (
  <nav style={{width: styleConsts.menuWidth}}>
    { contacts.map(contact => <MenuButton key={contact.id} link={contact.id} title={contact.name} />)}
  </nav>
);

export default ContactsList