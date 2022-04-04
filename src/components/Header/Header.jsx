import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import HeaderCss from './Header.module.css'
import styleConsts from '../../styles/styleConsts';

const AppBar = styled(MuiAppBar, {})(({ theme, open }) => ({
  position: 'static',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '80px',
  padding: styleConsts.defaultPadding,
}));

const Header = () => {
  return (
    <header>
      <AppBar>
        <img className={HeaderCss.img} src="/react.svg" alt="" />
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