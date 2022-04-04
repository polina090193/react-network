import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

const MainMenuButton = (props) => {
  return (
    <ListItemButton component={Link} to={props.link}>
      <ListItemText primary={props.title} />
    </ListItemButton>
  )
}

export default MainMenuButton