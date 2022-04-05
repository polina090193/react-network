import * as React from 'react';
import MenuButton from '@c/MenuButton/MenuButton'

const Sidebar = (
  <nav>
    <MenuButton link="/profile" title="Profile" />
    <MenuButton link="/messages" title="Messages" />
    <MenuButton link="/news" title="News" />
    <MenuButton link="/music" title="Music" />
    <MenuButton link="/settings" title="Settings" />
  </nav>
);

export default Sidebar