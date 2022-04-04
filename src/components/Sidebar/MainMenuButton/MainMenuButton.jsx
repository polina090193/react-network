import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import MainMenuButtonCss from './MainMenuButton.module.css'
import { useLocation } from "react-router-dom"

const MainMenuButton = (props) => {
  const location = useLocation()

  return (
    <ListItemButton component={Link} to={props.link} selected={props.link === location.pathname}>
      <ListItemText primary={props.title} />
    </ListItemButton>
  )
}

export default MainMenuButton