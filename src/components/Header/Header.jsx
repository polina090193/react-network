import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import HeaderCss from './Header.module.css'

const AppBar = styled(MuiAppBar, {})(({ theme, open }) => ({
  position: 'static',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '80px',
  padding: '24px',
}));

const Header = () => {
  return (
    <header>
      <AppBar>
        <img className={HeaderCss.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6_vceltdPf6eFJdd11dVFf14xcwqCH8rtg&usqp=CAU" alt="" />
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          React Network
        </Typography>
      </AppBar>
    </header>
  )
}

export default Header