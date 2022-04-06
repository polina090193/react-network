import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import styleConsts from './styles/styleConsts';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function AppContent(props) {

  return (
    <BrowserRouter>
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
            <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
            <Route path="/messages/*" element={ <Messages state={props.state.messagesPage} /> } />
            <Route path="/news/*" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default function App(props) {
  return <AppContent state={props.state} />;
}