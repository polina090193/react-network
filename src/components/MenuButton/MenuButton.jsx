import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import styleConsts from '@/styles/styleConsts';

const MenuButton = (props) => {
  const location = useLocation()

  return (
    <ListItemButton
      component={Link}
      to={props.link}
      selected={props.link === location.pathname}
      sx={{
        paddingLeft: styleConsts.defaultPadding
      }}>
      <ListItemText primary={props.title} />
    </ListItemButton>
  )
}

export default MenuButton