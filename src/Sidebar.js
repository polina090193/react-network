/* const Sidebar = () => {
  return (
    <nav>
      <a href="https://github.com/polina090193">css</a>
      <a href="https://github.com/polina090193">html</a>
      <a href="https://github.com/polina090193">js</a>
    </nav>
  )
}

export default Sidebar */
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const Sidebar = (
  <React.Fragment>
    <ListItemButton>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Messages" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="News" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Music" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);