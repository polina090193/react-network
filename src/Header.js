import Typography from '@mui/material/Typography';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

const AppBar = styled(MuiAppBar, {})(({ theme, open }) => ({
  position: 'static',
  display: 'flex',
  width: '100%',
  height: '80px',
  padding: '24px',
}));

const Header = () => {
  return (
    <AppBar>
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
  )
}

export default Header