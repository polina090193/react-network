import React from 'react';
import AppCss from './styles/App.css'
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import styleConsts from './styles/styleConsts';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Users from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function AppContent() {

  return (
      <Box>
        <Header />
        <Box
          component="main"
          sx={{ display: 'flex' }}
        >
          <Box
            sx={{
              display: 'block',
              width: styleConsts.menuWidth,
            }}
          >
            {Sidebar}
          </Box>
          <Routes>
            <Route path="/profile" index element={<Profile />} />
            <Route path="/messages/*" element={ <Messages /> } />
            <Route path="/news/*" element={<News />} />
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Profile />} />
            </Route>
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
  );
}

export default function App(props) {
  return <AppContent />;
}