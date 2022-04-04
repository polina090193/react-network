import * as React from 'react';
import MenuButton from '../../MenuButton/MenuButton'
import styleConsts from '../../../styles/styleConsts';

const ContactsList = () => (
  <nav style={{width: styleConsts.menuWidth}}>
    <MenuButton link="44" title="John" />
    <MenuButton link="88" title="Linda" />
  </nav>
);

export default ContactsList