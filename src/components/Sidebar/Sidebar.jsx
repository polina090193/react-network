import * as React from 'react';
import MainMenuButton from './MainMenuButton/MainMenuButton'

export const Sidebar = (
  <React.Fragment>
    <MainMenuButton link="/profile" title="Profile" />
    <MainMenuButton link="/messages" title="Messages" />
    <MainMenuButton link="/news" title="News" />
    <MainMenuButton link="/music" title="Music" />
    <MainMenuButton link="/settings" title="Settings" />
  </React.Fragment>
);